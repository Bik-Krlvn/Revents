import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events,onEventEdit,onDeleteEvent } = this.props;
    return (
      <div>
        {events.map(event => (
          <EventListItem onDeleteEvent={onDeleteEvent} key={event.id} event={event} onEventEdit={onEventEdit}/>
        ))}
      </div>
    );
  }
}
export default EventList;
