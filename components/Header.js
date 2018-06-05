import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return(
    <Menu style={{ marginTop: '10px' }}>
        <Link route="/">
            <a className="item">MyEtherTrust</a>
         </Link>
        <Menu.Menu position="right">
         <Link route="/trusts/new">
         <Button
                        floated="right"
                        content="Set up new Trust"
                        icon="add circle"
                        primary />
         </Link>
        </Menu.Menu>
    </Menu>


    );
}