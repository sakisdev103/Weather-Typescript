//Redux
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import moment from "moment";

//Ui
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const HourlyForecast = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);
  return (
    <div className="mt-10">
      <Table>
        <TableBody>
          <TableRow>
            {forecastWeatherData?.list.slice(0, 9).map((item) => {
              return (
                <TableCell key={item.dt}>
                  <div className="flex flex-col justify-center items-center text-lg">
                    <img
                      src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
                      alt="current-weather"
                    />
                    <p>
                      {moment
                        .utc(item.dt, "X")
                        .add(forecastWeatherData.city.timezone, "seconds")
                        .format("HH:mm")}
                    </p>
                    <p>{`${item.main.temp.toFixed()} °C`}</p>
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default HourlyForecast;
