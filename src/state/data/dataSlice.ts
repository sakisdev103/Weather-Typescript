import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { customFetch } from "@/utils/customFetch";

//Api key

const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;

type currentWeatherState = {
  coord: {
    log: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type forecastWeatherState = {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: 25;
      };
      wind: {
        speed: 5.31;
        deg: 165;
        gust: 4.36;
      };
      visibility: 10000;
      pop: 0;
      sys: {
        pod: "d";
      };
      dt_txt: "2024-06-16 15:00:00";
    }
  ];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

type weatherState = {
  currentWeatherData: currentWeatherState | null;
  forecastWeatherData: forecastWeatherState | null;
};

const initialState: weatherState = {
  currentWeatherData: null,
  forecastWeatherData: null,
};

export const getCurrentWeather = createAsyncThunk(
  "getCurrentWeather",
  async (city: string, thunkApi) => {
    try {
      const resp = await customFetch.get(
        `/weather/?q=${city}&units=metric&appid=${API_KEY}`
      );
      // console.log(resp.data);
      return resp.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const getForecastWeather = createAsyncThunk(
  "getForecastWeather",
  async (city: string, thunkApi) => {
    try {
      const resp = await customFetch.get(
        `/forecast/?q=${city}&units=metric&appid=${API_KEY}`
      );
      // console.log(resp.data);
      return resp.data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.currentWeatherData = action.payload;
      })
      .addCase(getForecastWeather.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.forecastWeatherData = action.payload;
      });
  },
});

export default dataSlice.reducer;
