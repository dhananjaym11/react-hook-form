import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AddClientFormOne from '../../components/Clients/AddClientFormOne';
import AddClientFormTwo from '../../components/Clients/AddClientFormTwo';

const ClientContainer = function () {
    return (
        <div>
            <h2>Clients profile</h2>
            <div>
                <Switch>
                    <Redirect exact from="/client/add/" to="/client/add/form-one" />
                    <Route exact path="/client/add/form-one" component={AddClientFormOne} />
                    <Route exact path="/client/add/form-two" component={AddClientFormTwo} />
                </Switch>
            </div>
        </div>
    )
}

export default ClientContainer;