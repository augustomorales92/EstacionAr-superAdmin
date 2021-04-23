import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from '../components/Landing'
import Cars from '../components/Cars'
import Users from '../components/Users'
import Sidebar from '../components/Sidebar'
import Admins from '../components/Admin'
import newAdmins from '../components/newAdmin'
import Support from '../components/Support'
const Main = () => {
    return (
        <>
        <Sidebar />
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/autos/:id" render={({match})=><Cars id={match.params.id} />}/>
            <Route exact path="/usuarios" component={Users}/>
            <Route exact path="/admins" component={Admins}/>
            <Route exact path="/admins/nuevoadmin" component={newAdmins}/>
            <Route exact path="/support/:id" render={({match})=><Support id={match.params.id} />}/>
        </Switch>
        </>
    );
};

export default Main;