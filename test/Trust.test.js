const assert =  require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/TrustFactory.json');
const compiledTrust = require('../ethereum/build/Trust.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
        
    // Use one of these accounts to deploy
    // the contract
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'});
    // ADD THIS ONE LINE RIGHT HERE!!!!! <---------------------
    factory.setProvider(provider);

    await factory.methods.createTrust("Test", web3.utils.toWei('0.2', 'ether'), accounts[1]).send({
        from: accounts[0],
        gas: 1000000
    });

    [trustAddress] = await factory.methods.getCreatedTrusts(accounts[0]).call();
    trust = await new web3.eth.Contract(
        JSON.parse(compiledTrust.interface),
        trustAddress
    )

    await trust.methods.fundTrust().send({
        value: web3.utils.toWei('1.1', 'ether'),
        from: accounts[0],
        gas: 3000000
    });


});

describe('Trust', () => {
    it ('deploys a factory and a campaign', () => {
     assert.ok(factory.options.address);
     assert.ok(trust.options.address)
    });

    it ('marks caller as the creator', async () => {
        const creator = await trust.methods.creator().call();
        assert.equal(accounts[0], creator);
    });

    it ('factory records trust to beneficiary', async () => {
        const benefitTrusts = await factory.methods.getBenefitTrusts(accounts[1]).call();
        assert.equal(trustAddress, benefitTrusts[0]);
    });

    it ('factory records trust to creator', async () => {
        const createdTrusts = await factory.methods.getCreatedTrusts(accounts[0]).call();
        assert.equal(trustAddress, createdTrusts[0]);
    });


    it ('can be funded and attributes are set properly', async () => {
              
        const result = await trust.methods.getSummary().call();
    
        assert.equal('Test', result[0]); //name
        assert.equal(accounts[0], result[1]); //creator
        assert.equal(accounts[1], result[2]); //beneficiary
        assert(!result[3]); // funded
        assert.equal(web3.utils.toWei('0.2', 'ether'), result[4]); //weekly limit
        assert.equal(web3.utils.toWei('0.2', 'ether'), result[5]); //available funds
        assert.equal(web3.utils.toWei('1.1', 'ether'), result[6]); //balance
    });

    it ('beneficiary can withdraw funds', async () => {
         await trust.methods.withdrawFunds(web3.utils.toWei('0.1', 'ether')).send({
            from: accounts[1],
            gas: 1000000
        });

        const result = await trust.methods.getSummary().call();
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        
 
        assert(balance > 100.09);
        assert.equal(web3.utils.toWei('0.1', 'ether'), result[5]); //available funds
        assert.equal(web3.utils.toWei('1', 'ether'), result[6]); //balance

    })


});