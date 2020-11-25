import { TimePicker } from "@material-ui/pickers";
import React, { useState, useEffect } from "react";
import { stringaOrario } from "../../utils/datetime";

function TimeSelector({ tempo, setTempo, giornoSeguente }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timePicker, setTimePicker] = useState(null);

  useEffect(() => {
    setTimePicker(tempo);
  }, [tempo]);

  return (
    <>
      {" "}
      <div>
        <TimePicker
          ampm={false}
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          value={timePicker}
          onChange={setTempo}
          TextFieldComponent={() => null}
        />
        <div
          className={`orarioIngresso ${giornoSeguente && "giornoSeguente"}`}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {stringaOrario(timePicker)}
        </div>
      </div>
    </>
  );
}

export default TimeSelector;
