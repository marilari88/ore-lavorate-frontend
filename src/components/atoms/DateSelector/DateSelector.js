import { DatePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import React, { useState } from "react";

function DateSelector({ tempo, setTempo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DatePicker
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        value={tempo}
        format="dd/MM/yyyy"
        onChange={setTempo}
      />
    </>
  );
}

export default DateSelector;

DateSelector.propTypes = {
  tempo: PropTypes.instanceOf(Date),
  setTempo: PropTypes.func.isRequired,
};
