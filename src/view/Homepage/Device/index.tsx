import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";
import "../style.scss";

const Device = () => {
  return (
    <>
      <SelectBox statusActive={true} statusConnect={true} />
      <TableLayout />
    </>
  );
};

export default Device;
