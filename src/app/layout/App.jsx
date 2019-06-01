import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import EventDetailedPage from "../../features/events/EventDetailed/EventDetailedPage";
import EventDashboard from "../../features/events/EventDashboard/EventDashboard";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import EventForm from "../../features/events/EventForm/EventForm";
import TestComponent from "../../test/TestComponent";
import ModalManager from "../../features/modals/ModalManager";
class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Navbar />

              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/createEvent" component={EventForm} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path='/test' component={TestComponent}/>
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
