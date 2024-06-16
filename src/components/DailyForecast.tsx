import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import moment from "moment";

//Ui
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const DailyForecast = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);

  const array = forecastWeatherData?.list.map(({ dt_txt }) => {
    return dt_txt.slice(0, 10);
  });

  const filteredArray = [...new Set(array)];
  console.log(filteredArray);

  //   console.log(filteredArray);

  //   console.log(
  //     forecastWeatherData?.list.filter((item) => {
  //       return item.dt_txt.slice(0, 10) === filteredArray;
  //     })
  //   );

  //   console.log(
  //     forecastWeatherData?.list
  //       .filter((item) => {
  //         return (
  //           moment
  //             .utc(item.dt, "X")
  //             .add(forecastWeatherData?.city.timezone, "seconds")
  //             .format("YYYY-MM-DD") === filteredArray[1]
  //         );
  //       })
  //       .map((item) => {
  //         return item;
  //       })
  //   );

  return (
    <div className="mt-10">
      <Table>
        <TableBody>
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default DailyForecast;
