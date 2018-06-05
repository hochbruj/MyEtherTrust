import React, { Component } from 'react';
import BenefitTrustItem from './BenefitTrustItem';
import { Card } from 'semantic-ui-react';

const BenefitTrusts = (props) => {
    const trustItems = props.trusts.map((address) => {
        return (
        <BenefitTrustItem
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

export default BenefitTrusts;