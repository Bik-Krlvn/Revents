import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import Cuid from "cuid";
import { connect } from "react-redux";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};
class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleEditEvent = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = Cuid();
    newEvent.hostPhotoURL = "/assets/images/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = eventToUpdate => {
    this.props.updateEvent(eventToUpdate);
    this.setState({
      selectedEvent: null,
      isOpen: false
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <h1>Event List</h1>
          <EventList
            onDeleteEvent={this.handleDeleteEvent}
            onEventEdit={this.handleEditEvent}
            events={events}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
            style={{ marginBottom: "0.9rem" }}
          />
          {this.state.isOpen && (
            <EventForm
              onUpdateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleFormCancel={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(EventDashboard);
