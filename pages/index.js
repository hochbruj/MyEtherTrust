import React, { Component } from 'react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import CreatedTrusts from '../components/CreatedTrusts';
import BenefitTrusts from '../components/BenefitTrusts';
import { Container, Message } from 'semantic-ui-react';

class TrustIndex extends Component {
    state = {
        createdTrusts: [],
        benefitTrusts: []
    }

    componentDidMount = async () => {
        const accounts = await web3.eth.getAccounts();
        const createdTrusts = await factory.methods.getCreatedTrusts(accounts[0]).call();
        const benefitTrusts = await factory.methods.getBenefitTrusts(accounts[0]).call();
        this.setState({ createdTrusts, benefitTrusts });
    }

    renderInfoMessage() {
        if (this.state.createdTrusts.length == 0 && this.state.benefitTrusts.length == 0) {
            return (
                <Message info color='blue'>
                    <Message.Header>Welcome to MyEtherTrust</Message.Header>
                     <p>This Ethereum DApp lets you set up smart contracts on the  Ropsten Test Network. These contracts act as trusts. You can define a beneficiary and a weekly withdrawal limit. Only the beneficiary will be able to withdraw ethers up to the limit. Before you start please make sure you have installed MetaMask and selected the Ropsten Test Network.</p>
                    </Message>
            )
        }
    }

    renderCreatedTrusts() {
        if (this.state.createdTrusts.length > null) {
            return (
                <Container style={{ marginTop:20 }}>
                      <h2>Trusts which I set up</h2>
                      <CreatedTrusts
                    trusts={this.state.createdTrusts} />
                </Container>
            )
        }
    }

    renderBenefitTrusts() {
        if (this.state.benefitTrusts.length > null) {
            return (
                <Container style={{ marginTop:20 }}>
                      <h2>Trusts which I am a benficiary to</h2>
                      <BenefitTrusts
                    trusts={this.state.benefitTrusts} />
                </Container>
            )
        }
    }


    
    render() {
        return (
        <Layout>
            {this.renderInfoMessage()}
            {this.renderCreatedTrusts()}
            {this.renderBenefitTrusts()}
        </Layout>   
        )};
}

export default TrustIndex;