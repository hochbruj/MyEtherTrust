import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class TrustNew extends Component {
    state = { 
        name: '',
        weeklyLimit: '',
        beneficiary: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '', successMessage: 'Please wait until transction is confirmed...' });
        const { name, weeklyLimit, beneficiary } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createTrust(
                    name,
                    web3.utils.toWei(weeklyLimit, 'ether'),
                    beneficiary)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message })
        }

        this.setState({ loading: false});


    };

    render() {
        return (
        <Layout>
            <Message
                 attached
                header='Set up a new trust!'
                content='Provide a name, beneficiary and weekly withdrawal limit. Only the address of the benficiary will be able to withraw money from the trust. Once the trust is set up you have to fund it with ethers.'
            />

            <Form className="attached fluid segment" onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                        <label>Name</label>
                        <input
                            value={this.state.name}
                            onChange={event => this.setState({ name: event.target.value })}
                        />
                 </Form.Field>

                 <Form.Field>
                        <label>Beneficiary</label>
                        <input
                            value={this.state.beneficiary}
                            onChange={event => this.setState({ beneficiary: event.target.value })}
                        />
                 </Form.Field>



                <Form.Field>
                    <label>Weekly Withdrawal Limit</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={this.state.weeklyLimit}
                        onChange={event =>
                             this.setState({weeklyLimit: event.target.value})}
                    />
                </Form.Field>

                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={!!this.state.loading} primary>Set Up!</Button>
            
            </Form>
        </Layout>
        );
    }
}

export default TrustNew;