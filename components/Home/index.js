import React, { useEffect, useState } from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';

// Styles
import styles from '../../styles/Home.module.css';

export default function Home({ data }) {
  const [date, setDate] = useState([]);
  const [informations, setInformations] = useState({
    lat: -26.2503,
    lon: -49.3786,
    timezone: 'America/Sao_Paulo',
    timezone_offset: -10800,
    current: {
      dt: 1630371263,
      sunrise: 1630315933,
      sunset: 1630357463,
      temp: 13.46,
      feels_like: 13.37,
      pressure: 1026,
      humidity: 96,
      dew_point: 12.84,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.5,
      wind_deg: 102,
      wind_gust: 4.83,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
    },
    daily: [
      {
        dt: 1630335600,
        sunrise: 1630315933,
        sunset: 1630357463,
        moonrise: 1630294920,
        moonset: 1630333800,
        moon_phase: 0.75,
        temp: {
          day: 14.26,
          min: 8.39,
          max: 14.57,
          night: 13.22,
          eve: 12.8,
          morn: 8.39,
        },
        feels_like: {
          day: 14.01,
          night: 13.13,
          eve: 12.69,
          morn: 8.39,
        },
        pressure: 1026,
        humidity: 87,
        dew_point: 12.18,
        wind_speed: 1.62,
        wind_deg: 118,
        wind_gust: 5.42,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 98,
        pop: 0.26,
        uvi: 3.87,
      },
      {
        dt: 1630422000,
        sunrise: 1630402271,
        sunset: 1630443888,
        moonrise: 1630384620,
        moonset: 1630422780,
        moon_phase: 0.79,
        temp: {
          day: 18.68,
          min: 12.21,
          max: 19.98,
          night: 13.27,
          eve: 14.22,
          morn: 12.25,
        },
        feels_like: {
          day: 18.25,
          night: 13.08,
          eve: 14.13,
          morn: 12.06,
        },
        pressure: 1025,
        humidity: 63,
        dew_point: 11.42,
        wind_speed: 2.73,
        wind_deg: 105,
        wind_gust: 5.17,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: 69,
        pop: 0.22,
        uvi: 7.75,
      },
      {
        dt: 1630508400,
        sunrise: 1630488609,
        sunset: 1630530313,
        moonrise: 1630474200,
        moonset: 1630512060,
        moon_phase: 0.82,
        temp: {
          day: 21.64,
          min: 13.5,
          max: 22.75,
          night: 14.21,
          eve: 15.59,
          morn: 13.7,
        },
        feels_like: {
          day: 21.22,
          night: 14.14,
          eve: 15.61,
          morn: 13.32,
        },
        pressure: 1021,
        humidity: 52,
        dew_point: 11.33,
        wind_speed: 2.41,
        wind_deg: 109,
        wind_gust: 4.96,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: 50,
        pop: 0.18,
        uvi: 7.87,
      },
      {
        dt: 1630594800,
        sunrise: 1630574945,
        sunset: 1630616737,
        moonrise: 1630563780,
        moonset: 1630601640,
        moon_phase: 0.85,
        temp: {
          day: 24.15,
          min: 12.38,
          max: 24.81,
          night: 14.87,
          eve: 17.28,
          morn: 12.38,
        },
        feels_like: {
          day: 23.56,
          night: 14.53,
          eve: 16.92,
          morn: 12.18,
        },
        pressure: 1016,
        humidity: 36,
        dew_point: 8.44,
        wind_speed: 1.33,
        wind_deg: 100,
        wind_gust: 3.59,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0,
        uvi: 6.62,
      },
      {
        dt: 1630681200,
        sunrise: 1630661282,
        sunset: 1630703161,
        moonrise: 1630653180,
        moonset: 1630691460,
        moon_phase: 0.88,
        temp: {
          day: 28.25,
          min: 13.04,
          max: 30.13,
          night: 17.72,
          eve: 21.51,
          morn: 13.04,
        },
        feels_like: {
          day: 27.19,
          night: 17.69,
          eve: 21.31,
          morn: 12.36,
        },
        pressure: 1012,
        humidity: 28,
        dew_point: 8.34,
        wind_speed: 2.04,
        wind_deg: 310,
        wind_gust: 4.98,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 8,
        pop: 0.22,
        rain: 0.28,
        uvi: 8.14,
      },
      {
        dt: 1630767600,
        sunrise: 1630747617,
        sunset: 1630789586,
        moonrise: 1630742340,
        moonset: 1630781400,
        moon_phase: 0.92,
        temp: {
          day: 30.49,
          min: 16.01,
          max: 30.49,
          night: 18.44,
          eve: 20.52,
          morn: 16.22,
        },
        feels_like: {
          day: 29.07,
          night: 18.53,
          eve: 20.66,
          morn: 15.8,
        },
        pressure: 1011,
        humidity: 28,
        dew_point: 10.28,
        wind_speed: 1.3,
        wind_deg: 349,
        wind_gust: 3.86,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 57,
        pop: 0.2,
        rain: 0.12,
        uvi: 2.62,
      },
      {
        dt: 1630854000,
        sunrise: 1630833953,
        sunset: 1630876010,
        moonrise: 1630831320,
        moonset: 1630871460,
        moon_phase: 0.95,
        temp: {
          day: 24.87,
          min: 16.64,
          max: 27.29,
          night: 16.64,
          eve: 21.08,
          morn: 18.41,
        },
        feels_like: {
          day: 24.51,
          night: 16.27,
          eve: 20.6,
          morn: 18.13,
        },
        pressure: 1012,
        humidity: 42,
        dew_point: 11.44,
        wind_speed: 3.98,
        wind_deg: 300,
        wind_gust: 13.79,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 100,
        pop: 0.34,
        rain: 0.29,
        uvi: 3,
      },
      {
        dt: 1630940400,
        sunrise: 1630920288,
        sunset: 1630962433,
        moonrise: 1630920060,
        moonset: 1630961520,
        moon_phase: 0,
        temp: {
          day: 20.76,
          min: 13.66,
          max: 23.47,
          night: 14.17,
          eve: 16.11,
          morn: 13.8,
        },
        feels_like: {
          day: 20.41,
          night: 14.15,
          eve: 16.05,
          morn: 13.61,
        },
        pressure: 1019,
        humidity: 58,
        dew_point: 12.23,
        wind_speed: 2.5,
        wind_deg: 123,
        wind_gust: 5.51,
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: 80,
        pop: 0.22,
        rain: 0.16,
        uvi: 3,
      },
    ],
  });

  useEffect(() => {
    /* axios
      .get(
        `onecall?appid=0f3d3eab02282195d263368f22593ee1&lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly&units=metric`
      )
      .then((response) => {
        setInformations(response.data);
      })
      .catch((err) => {
        console.log('Deu ruim', err);
      }); */

    setDate(format(fromUnixTime(data.dt), 'hh:mm aaa OOOO'));
  }, [data]);

  return (
    <>
      <div className={styles.grid}>
        <div>
          <div className={styles.home}>
            {console.log('informations', informations)}
            {console.log('data', data)}
            <div className={styles.card}>
              <p className={styles.today}>Now</p>
              <p className={styles.city}>
                {data.name} as of {date.toString()}
              </p>

              <p className={styles.temperature}>
                {Math.round(data.main.temp)}º
              </p>
              <p>{data.weather[0].description}</p>

              <p>
                {Math.round(data.main.temp_min)}/
                {Math.round(data.main.temp_max)}
              </p>
            </div>
          </div>

          <div className={styles.home}>
            <div className={styles.card}>
              <p className={styles.today}>
                Today's Forecast for São Bento do Sul
              </p>
              <p className={styles.city}>
                {data.name} as of {date.toString()}
              </p>

              <p className={styles.temperature}>
                {Math.round(data.main.temp)}º
              </p>
              <p>{data.weather[0].description}</p>

              <p>
                {Math.round(data.main.temp_min)}/
                {Math.round(data.main.temp_max)}
              </p>
            </div>
          </div>

          <div className={styles.home}>
            <div className={styles.card}>
              <p className={styles.today}>Daily Forecast</p>
              <p className={styles.city}>
                {data.name} as of {date.toString()}
              </p>

              <p className={styles.temperature}>
                {Math.round(data.main.temp)}º
              </p>
              <p>{data.weather[0].description}</p>

              <p>
                {Math.round(data.main.temp_min)}/
                {Math.round(data.main.temp_max)}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.home}>
          <div className={styles.card}>Prop</div>
        </div>
      </div>
    </>
  );
}
