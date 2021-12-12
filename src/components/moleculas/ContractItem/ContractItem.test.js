import { render } from "@testing-library/react";
import ContractItem from "./ContractItem";

const contractMock = {
  nomeContratto: "Dipendente 2021",
  nomeAzienda: "Perugina spa",
  inizioContratto: "2021-11-11",
  fineContratto: "",
  orePrevisteContratto: 1000,
  oreLavorateContratto: 10,
};

describe("Render ContractItem Components", () => {
  it("Render contract name", () => {
    const { getByText } = render(<ContractItem contratto={contractMock} />);
    expect(getByText(/dipendente 2021/i)).toBeInTheDocument();
  });

  it("Render company name", () => {
    const { getByText } = render(<ContractItem contratto={contractMock} />);
    expect(getByText(/Perugina spa/i)).toBeInTheDocument();
  });
});
