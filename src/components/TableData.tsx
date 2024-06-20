import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import moment from "moment";

//Ui
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

const TableData = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);

  const array = forecastWeatherData?.list.map(({ dt_txt }) => {
    return dt_txt.slice(0, 10);
  });

  const filteredArray = [...new Set(array?.slice(1, array.length))];

  let tempAvg = [];

  for (let i = 0; i < filteredArray.length; i++) {
    tempAvg[i] = forecastWeatherData?.list
      .filter((item) => {
        return (
          moment
            .utc(item.dt, "X")
            .add(forecastWeatherData.city.timezone, "seconds")
            .format("YYYY-MM-DD") === filteredArray[i]
        );
      })
      .map((item) => {
        return item.main.temp;
      });
  }

  const avgTemperatureDaily: string[] = tempAvg.map((item) =>
    (
      item?.reduce((a: number, b: number) => a + b, 0)! / item?.length!
    ).toFixed()
  );

  return (
    <div>
      <Table>
        <TableBody className="text-lg">
          {avgTemperatureDaily.map((item: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <p>{moment(filteredArray[index]).format("dddd")}</p>
                </TableCell>
                <TableCell>
                  <p>{`${item} °C`}</p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default TableData;
