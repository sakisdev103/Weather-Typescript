import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

//Icon
import { MapPin } from "lucide-react";

const Widget = () => {
  const { currentWeatherData } = useSelector((state: RootState) => state.data);
  console.log(currentWeatherData);

  return (
    <div className=" grid grid-cols-2 place-content-start py-4">
      <div className="flex flex-col justify-center items-center">
        <h3 className=" flex text-2xl gap-2 mb-2">
          {`${currentWeatherData?.name}, ${currentWeatherData?.sys.country}`}
          <MapPin />
        </h3>
        <h3 className="text-lg mb-1">
          {`${currentWeatherData?.main.temp.toFixed()} °C`}
        </h3>
        <h3 className="text-lg">
          {`Feels like ${currentWeatherData?.main.feels_like.toFixed()} °C`}
        </h3>
      </div>
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${currentWeatherData?.weather[0].icon}@2x.png`}
          alt="current-weather"
        />
      </div>
    </div>
  );
};
export default Widget;
