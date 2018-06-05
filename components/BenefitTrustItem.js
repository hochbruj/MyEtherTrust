import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Trust from '../ethereum/trust';
import WithdrawForm from './WithdrawForm';

class BenefitTrustItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: ['','','',false,0,0,0],
            trust: {}
        }
    }
 
    componentDidMount = async () => {
        const trust = Trust(this.props.address);
        const summary = await trust.methods.getSummary().call();
        this.setState({ summary, trust });
  

    }

    renderForm() {
        if (!this.state.summary[3]) {
            return (
                <Card.Content extra>
                    <WithdrawForm
                        address={this.props.address}/>
                </Card.Content>
            )
        }
    }

    render() {
        return(
            <Card fluid>
                <Card.Content>
                    <Card.Header>{this.state.summary[0]}</Card.Header>
                    <Card.Meta>Trust was set up by: {this.state.summary[1]}</Card.Meta>
                    <Card.Meta>Weekly withdrawal limit: {web3.utils.fromWei(this.state.summary[4].toString(), 'ether')} Ether</Card.Meta>
                    <Card.Meta>Amount available for withdrawal: {web3.utils.fromWei(this.state.summary[5].toString(), 'ether')} Ether</Card.Meta>
                </Card.Content>
                {this.renderForm()}
            </Card>
            
        )

    }



}

export default BenefitTrustItem;