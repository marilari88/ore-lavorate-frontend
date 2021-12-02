import { render, screen } from "@testing-library/react";
import DateSelector from "./DateSelector";
import itLocale from "date-fns/locale/it";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

describe("Render DateSelector", () => {
  it("Pass a 10/11/2021 date to date picker", () => {
    const setTempoMock = jest.fn();
    const adesso = new Date(2021, 10, 10);
    const { getByRole } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={itLocale}>
        <DateSelector tempo={adesso} setTempo={setTempoMock} />
      </MuiPickersUtilsProvider>
    );
    expect(getByRole("textbox")).toHaveValue("10/11/2021");
  });
});
