import web3 from './web3';
import Trust from './build/Trust.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Trust.interface),
        address
    );
}