import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testAction";
import { Button } from "semantic-ui-react";
import { openModal } from "../features/modals/modalActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data, openModal } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>This is a {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 45 })}
          color="teal"
          content="Open Modal"
        />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
