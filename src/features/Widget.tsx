import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

//Files
import PrimaryData from "../components/PrimaryData";
import SecondaryData from "../components/SecondaryData";
import DailyForecast from "@/components/DailyForecast";

const Widget = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);
  console.log(forecastWeatherData);

  return (
    <div>
      <PrimaryData />
      <SecondaryData />
      <DailyForecast />
    </div>
  );
};
export default Widget;
