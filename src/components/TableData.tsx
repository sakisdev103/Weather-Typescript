import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import moment from "moment";

//Ui
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

const TableData = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);

  return (
    <div>
      <Table>
        <TableBody className="text-lg">
          {forecastWeatherData?.list.map((item) => {
            return (
              <TableRow>
                <TableCell>
                  {moment
                    .utc(item.dt, "X")
                    .add(forecastWeatherData.city.timezone, "seconds")
                    .format("ddd HH:mm")}
                </TableCell>
                <TableCell>
                  <img
                    src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}.png`}
                    alt="current-weather"
                  />
                </TableCell>
                <TableCell>{`${item.main.temp_min.toFixed()} °C ${item.main.temp_max.toFixed()} °C`}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableData;
