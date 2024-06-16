import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

//Icon
import { MapPin } from "lucide-react";

const PrimaryData = () => {
  const { currentWeatherData } = useSelector((state: RootState) => state.data);
  return (
    <div className="flex flex-col items-center">
      <h3 className="flex text-2xl gap-2 mb-2">
        {`${currentWeatherData?.name}, ${currentWeatherData?.sys.country}`}
        <MapPin />
      </h3>
      <img
        src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@4x.png`}
        alt="current-weather"
      />
      <h3 className="text-4xl mb-1">
        {`${currentWeatherData?.main.temp.toFixed()} °C`}
      </h3>
    </div>
  );
};
export default PrimaryData;
