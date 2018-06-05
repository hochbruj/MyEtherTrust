import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Trust from '../ethereum/trust';
import FundForm from './FundForm';

class CreatedTrustItem extends Component {
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
        if (this.state.summary[3]) {
            return (
                <Card.Content extra>
                    <FundForm
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
                    <Card.Meta>Beneficiary: {this.state.summary[2]}</Card.Meta>
                    <Card.Meta>Weekly Withdrawal Limit: {web3.utils.fromWei(this.state.summary[4].toString(), 'ether')} Ether</Card.Meta>
                    <Card.Meta>Current Balance: {web3.utils.fromWei(this.state.summary[6].toString(), 'ether')} Ether</Card.Meta>
                </Card.Content>
                {this.renderForm()}
            </Card>
            
        )

    }



}

export default CreatedTrustItem;