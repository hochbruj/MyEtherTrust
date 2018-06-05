import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
import Trust from '../ethereum/trust';

class WithdrawForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            errorMessage: ''
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
     
        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const trust = Trust(this.props.address);
            await trust.methods
                .withdrawFunds(web3.utils.toWei(this.state.value, 'ether'))
                .send({
                    from: accounts[0],
                });
            window.location.reload(true);
            
                
        } catch (err) {
            this.setState({ errorMessage: err.message });

        }

        this.setState({ loading: false, value: ''  });


    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                 <label>Withdraw</label>
                 <Input
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                    label="ether"
                    labelPosition="right" />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={!!this.state.loading} primary>Submit</Button>
            </Form>
        );
            
    }
}

export default WithdrawForm;