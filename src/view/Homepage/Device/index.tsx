import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";

const Device = () => {
  return (
    <div className="device">
      <SelectBox statusActive={true} statusConnect={true} />
      <TableLayout />
    </div>
  );
};

export default Device;
