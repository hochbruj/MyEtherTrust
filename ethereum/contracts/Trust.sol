pragma solidity ^0.4.17;

contract TrustFactory {
    address[] public deployedTrusts;
 
    
    mapping (address => address[] ) benefitTrusts;
    mapping (address => address[] ) createdTrusts;
    
    function createTrust(string _name, uint _weeklylimit, address _beneficiary) public {
        address newTrust = new Trust(msg.sender, _name, _weeklylimit, _beneficiary);
        
        deployedTrusts.push(newTrust);
        benefitTrusts[_beneficiary].push(newTrust);
        createdTrusts[msg.sender].push(newTrust);
    }
    
    function getCreatedTrusts(address _creator) public view returns (address[]) {
        return createdTrusts[_creator];
    }
    
    function getBenefitTrusts(address _beneficiary) public view returns (address[]) {
        return benefitTrusts[_beneficiary];
    }
    
    
}

contract Trust {
    address public creator;
    address public beneficiary;
    uint public weeklyLimit;
    string public name;
    bool private unfunded;
    uint public initialFunds;
    uint public startTime;

    modifier onlyBeneficiary() {
        require(beneficiary == msg.sender);
        _;
    }
        
    constructor (address _creator, string _name, uint _weeklyLimit, address _beneficiary ) public {
        require(_weeklyLimit > 0);
        
    // set contract variables
        name = _name;
        weeklyLimit = _weeklyLimit;
        beneficiary = _beneficiary;
        creator = _creator;
        unfunded = true;

 
    }
    
    function fundTrust() public payable {
        require(unfunded);
        require(msg.value > 0);
       
        initialFunds = msg.value;
        startTime = now;
        unfunded = false;
        
    }
    
    function withdrawFunds(uint amount) public onlyBeneficiary {
        require(!unfunded);
        require(availableFunds() >= amount);
        beneficiary.transfer(amount);
    }
    
    function availableFunds() public view returns (uint) {
        if (unfunded) { return 0;}
        uint spendingPeriod = ((now - startTime) / (1 * 1 weeks)) + 1;
        uint totalSpentFunds = initialFunds - address(this).balance;
        uint totalAvailableInPeriod = spendingPeriod * weeklyLimit;
        if (totalAvailableInPeriod >= initialFunds)
            { totalAvailableInPeriod = initialFunds; }
        return totalAvailableInPeriod - totalSpentFunds;
    }
    
    function getSummary() public view returns ( 
        string, address, address, bool, uint, uint, uint ) {
        return (
            name,
            creator,
            beneficiary,
            unfunded,
            weeklyLimit,
            this.availableFunds(),
            address(this).balance
            );
    }

}