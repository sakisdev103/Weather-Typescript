//Files
import PrimaryData from "../components/PrimaryData";
import SecondaryData from "../components/SecondaryData";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";

const Widget = () => {
  return (
    <div>
      <PrimaryData />
      <SecondaryData />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};
export default Widget;
