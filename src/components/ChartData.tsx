import { useEffect } from "react";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import moment from "moment";
import Chart from "chart.js/auto";

const ChartData = () => {
  const { forecastWeatherData } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    let myChart: any;

    const chartFunc = () => {
      const graphArea: any = document.getElementById("myChart");

      let data = {
        labels: forecastWeatherData?.list.map((item) => {
          return moment
            .utc(item.dt, "X")
            .add(forecastWeatherData.city.timezone, "seconds")
            .format("ddd HH:mm");
        }),
        datasets: [
          {
            label: "",
            data: forecastWeatherData?.list.map((item) => {
              return item.main.temp.toFixed();
            }),
            borderColor: "#e8f0fe",
            backgroundColor: "#e8f0fe",
            borderWidth: 2,
          },
        ],
      };

      let options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: { display: false },
          },
          y: {
            // beginAtZero: true,
            ticks: {
              //   display: false,
              color: "#fff",
            },
            grid: { display: false },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      };
      myChart = new Chart(graphArea, { type: "line", data, options });
    };
    chartFunc();
    return () => {
      myChart.destroy();
    };
  }, [forecastWeatherData]);

  return (
    <div className="my-10 h-full w-full">
      <canvas id="myChart"></canvas>
    </div>
  );
};
export default ChartData;
