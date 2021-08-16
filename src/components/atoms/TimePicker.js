import React, { useEffect, useState } from "react";
import { KeyboardTimePicker } from "@material-ui/pickers";
import TextInput from "./TextInput";

function TimePicker(props) {
  const [orario, setOrario] = useState(undefined);
  useEffect(() => {
    setOrario(props.orario);
  }, [props.orario]);
  const renderInput = (props) => <TextInput value={props.value} />;
  return (
    <KeyboardTimePicker
      ampm={false}
      disableFuture={true}
      variant="inline"
      value={orario}
      TextFieldComponent={renderInput}
      onChange={setOrario}
    />
  );
}

export default TimePicker;
