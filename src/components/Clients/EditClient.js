import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AddClientFormOne from '../../components/Clients/AddClientFormOne';
import AddClientFormTwo from '../../components/Clients/AddClientFormTwo';

export default function EditClient() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/client/edit/:clientId" to="/client/edit/:clientId/form-one" />
                <Route exact path="/client/edit/:clientId/form-one" component={AddClientFormOne} />
                <Route exact path="/client/edit/:clientId/form-two" component={AddClientFormTwo} />
            </Switch>
        </div>
    )
}