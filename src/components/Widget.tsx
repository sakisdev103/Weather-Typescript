import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

//Files
import PrimaryData from "./PrimaryData";
import SecondaryData from "./SecondaryData";

const Widget = () => {
  const { currentWeatherData } = useSelector((state: RootState) => state.data);
  console.log(currentWeatherData);

  return (
    <div>
      <PrimaryData />
      <SecondaryData />
    </div>
  );
};
export default Widget;
