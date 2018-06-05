import React, { Component } from 'react';
import CreatedTrustItem from './CreatedTrustItem';
import { Card } from 'semantic-ui-react';

const CreatedTrusts = (props) => {
    const trustItems = props.trusts.map((address) => {
        return (
        <CreatedTrustItem
            key={address}
            address={address} />
        );
    });
    

    return (
        <Card.Group>
            {trustItems}
        </Card.Group>
    );
};

export default CreatedTrusts;