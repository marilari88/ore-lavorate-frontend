import { DatePicker } from "@material-ui/pickers";
import React, { useState, useEffect } from "react";

function DateSelector({ tempo, setTempo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(tempo);
  }, [tempo]);

  return (
    <>
      <div>
        <DatePicker
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          value={date}
          format="dd/MM/yyyy"
          onChange={setDate}
          TextFieldComponent={() => (
            <input type="text" onClick={() => setIsOpen(true)} value={date} />
          )}
        />
      </div>
    </>
  );
}

export default DateSelector;
