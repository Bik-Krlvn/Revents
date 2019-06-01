import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  input: { value, onChange, ...otherInput },
  placeholder,
  width,
  meta: { touched, error },
  ...other
}) => {
  return (
    <Form.Field width={width} error={touched && !!error}>
      <DatePicker
        {...other}
        placeholderText={placeholder}
        selected={value ? new Date(value) : null}
        onChange={onChange}
        {...otherInput}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
