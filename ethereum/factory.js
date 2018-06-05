import web3 from './web3';
import TrustFactory from './build/TrustFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(TrustFactory.interface),
    '0x3008b8C134A478FDe864620A808C8E35a468ba15'
);

export default instance;

