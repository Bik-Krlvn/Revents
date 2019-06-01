import React from "react";
import { Form, Select, Label } from "semantic-ui-react";

const SelectInput = ({
  input,
  placeholder,
  multiple,
  width,
  options,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <Select
        value={input.value || null}
        placeholder={placeholder}
        options={options}
        onChange={(evt,data) => input.onChange(data.value)}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
