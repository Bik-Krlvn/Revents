import React from "react";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route, Switch,Redirect } from "react-router-dom";
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'  
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'

const SettingsDashboard = () => {
  return (
    <div>
      <Grid>
        <Grid.Column width={12}>
          <h1>SettingsDashboard</h1>
          <Switch>
          <Redirect exact from='/settings' to='/settings/basic'/>
            <Route path="/settings/basic" component={BasicPage} />
            <Route path='/settings/about' component={AboutPage}/>
            <Route path='/settings/Photos' component={PhotosPage}/>
            <Route path='/settings/account' component={AccountPage}/>
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          <h1>Nav</h1>
          <SettingsNav />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SettingsDashboard;
