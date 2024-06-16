import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { Search, Widget } from "./components";

const App = () => {
  const { currentWeatherData, forecastWeatherData } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <div className="container max-w-lg mx-auto">
      <Search />
      {currentWeatherData && forecastWeatherData !== null && <Widget />}
    </div>
  );
};
export default App;
