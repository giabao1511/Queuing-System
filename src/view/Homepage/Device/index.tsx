import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";
import "../style.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getAllDeviceInitiate } from "../../../redux/actions/ActionDevice";

const Device = () => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector((state) => state.device.allDevices);
  console.log(devices);

  useEffect(() => {
    dispatch(getAllDeviceInitiate());
  }, [dispatch]);

  return (
    <>
      <SelectBox statusActive={true} statusConnect={true} />
      <TableLayout />
    </>
  );
};

export default Device;
