import React, { useEffect, useState } from "react";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import TextInput from "./TextInput";

function TimePicker(props) {
  const [orario, setOrario] = useState(undefined);
  useEffect(() => {
    setOrario(props.orario);
  }, [props.orario]);
  const renderInput = (props) => <TextInput value={props.value} />;
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <KeyboardTimePicker
        ampm={false}
        disableFuture={true}
        variant="inline"
        value={orario}
        TextFieldComponent={renderInput}
        onChange={setOrario}
      />
    </MuiPickersUtilsProvider>
  );
}

export default TimePicker;
