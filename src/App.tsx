import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import {
  Search,
  Widget,
  TemperatureData,
  SunData,
  SecondaryData,
  ChartData,
} from "./components";

const App = () => {
  const { currentWeatherData, forecastWeatherData } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <div className="container">
      <Search />
      {currentWeatherData && forecastWeatherData !== null && (
        <>
          <Widget />
          {/* <TemperatureData />
          <SunData />
          <SecondaryData />
          <ChartData /> */}
        </>
      )}
    </div>
  );
};
export default App;
