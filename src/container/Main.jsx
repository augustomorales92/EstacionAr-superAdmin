import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from '../components/Landing'
import Cars from '../components/Cars'
import Users from '../components/Users'
import Sidebar from '../components/Sidebar'
const Main = () => {
    return (
        <>
        <Sidebar />
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/autos/:id" render={({match})=><Cars id={match.params.id} />}/>
            <Route exact path="/usuarios" component={Users}/>
        </Switch>
        </>
    );
};

export default Main;