import React, { Component } from "react";
import { Segment, Form, Label, Input, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};
class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    } else {
      this.setState({
        event: emptyEvent
      });
    }
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.onUpdateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    const { event } = this.state;
    const { handleFormCancel } = this.props;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <Label pointing="below">Event Title</Label>
              <Input
                name="title"
                value={event.title}
                onChange={this.onInputChange}
                type="text"
                placeholder="enter event title"
              />
            </Form.Field>

            <Form.Field>
              <Label pointing="below">Date</Label>
              <Input
                name="date"
                value={event.date}
                onChange={this.onInputChange}
                type="date"
                placeholder="set event date"
              />
            </Form.Field>

            <Form.Field>
              <Label pointing="below">City</Label>
              <Input
                name="city"
                value={event.city}
                onChange={this.onInputChange}
                type="text"
                placeholder="enter city for event"
              />
            </Form.Field>

            <Form.Field>
              <Label pointing="below">Venue</Label>
              <Input
                name="venue"
                value={event.venue}
                onChange={this.onInputChange}
                type="text"
                placeholder="city venue for event"
              />
            </Form.Field>

            <Form.Field>
              <Label pointing="below">HostedBy</Label>
              <Input
                name="hostedBy"
                value={event.hostedBy}
                onChange={this.onInputChange}
                type="text"
                placeholder="person hosting the event"
              />
            </Form.Field>

            <Button.Group>
              <Button type="submit" content="Create" positive />
              <Button.Or />
              <Button
                onClick={handleFormCancel}
                type="button"
                content="Cancel"
              />
            </Button.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default EventForm;
