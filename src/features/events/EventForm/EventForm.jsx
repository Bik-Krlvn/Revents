import React, { Component } from "react";
import { Segment, Form, Label, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(e => e.id === eventId)[0];
  }
  return { initialValues: event };
};

const actions = {
  createEvent,
  updateEvent
};

const validate = combineValidators({
  title: isRequired({ message: "event title is required" }),
  category: isRequired({ message: "select a category" }),
  description: composeValidators(
    isRequired({ message: "description can't be empty" }),
    hasLengthGreaterThan(4)({
      message: "description must be atlest 5 characters"
    })
  )(),
  venue: isRequired("venue"),
  city: isRequired("city"),
  date: isRequired("date")
});
class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/images/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header
              sub
              color="teal"
              content="Event Details"
              style={{ padding: 5 }}
            />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Label pointing="below">Event Title</Label>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="event title"
              />

              <Form.Field>
                <Label pointing="below">Category</Label>
                <Field
                  name="category"
                  type="text"
                  component={SelectInput}
                  options={category}
                  placeholder="event category"
                />
              </Form.Field>

              <Form.Field>
                <Label pointing="below">Description</Label>
                <Field
                  name="description"
                  type="text"
                  component={TextArea}
                  rows={3}
                  placeholder="say something about the event"
                />
              </Form.Field>

              <Header
                sub
                color="teal"
                content="Event Location Details"
                style={{ marginBottom: 15 }}
              />

              <Form.Field>
                <Label pointing="below">City</Label>
                <Field
                  name="city"
                  type="text"
                  component={TextInput}
                  placeholder="enter city for event"
                />
              </Form.Field>

              <Form.Field>
                <Label pointing="below">Venue</Label>
                <Field
                  name="venue"
                  type="text"
                  component={TextInput}
                  placeholder="city venue for event"
                />
              </Form.Field>

              <Form.Field>
                <Label pointing="below">HostedBy</Label>
                <Field
                  name="hostedBy"
                  component={TextInput}
                  type="text"
                  placeholder="person hosting the event"
                />
              </Form.Field>

              <Form.Field>
                <Label pointing="below">Date</Label>
                <Field
                  name="date"
                  component={DateInput}
                  dateFormat="Pp"
                  showTimeSelect
                  timeIntervals={15}
                  placeholder="Date and time of event"
                />
              </Form.Field>

              <Button.Group>
                <Button
                  disabled={invalid || submitting || pristine}
                  type="submit"
                  content="Create"
                  positive
                />
                <Button.Or />
                <Button
                  onClick={this.props.history.goBack}
                  type="button"
                  content="Cancel"
                />
              </Button.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
