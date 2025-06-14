//Redux
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

//Icons
import { Sunrise, Sunset, Droplet, Wind } from "lucide-react";

import moment from "moment";

const SecondaryData = () => {
  const { currentWeatherData } = useSelector((state: RootState) => state.data);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 justify-items-center my-10">
      <div className="flex gap-2">
        <Wind />
        <p>{`${currentWeatherData?.wind.speed.toFixed()} km/h`}</p>
      </div>
      <div className="flex gap-2">
        <Droplet />
        <p>{`${currentWeatherData?.main.humidity}%`}</p>
      </div>
      <div className="flex gap-2">
        <Sunrise />
        <p>
          {moment
            .utc(currentWeatherData?.sys.sunrise, "X")
            .add(currentWeatherData?.timezone, "seconds")
            .format("HH:mm ")}
        </p>
      </div>
      <div className="flex gap-2">
        <Sunset />
        <p>
          {moment
            .utc(currentWeatherData?.sys.sunset, "X")
            .add(currentWeatherData?.timezone, "seconds")
            .format("HH:mm ")}
        </p>
      </div>
    </div>
  );
};
export default SecondaryData;
