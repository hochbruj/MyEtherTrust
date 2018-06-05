import React, { Component } from 'react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import CreatedTrusts from '../components/CreatedTrusts';
import BenefitTrusts from '../components/BenefitTrusts';
import { Container } from 'semantic-ui-react';

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
            {this.renderCreatedTrusts()}
            {this.renderBenefitTrusts()}
        </Layout>   
        )};
}

export default TrustIndex;