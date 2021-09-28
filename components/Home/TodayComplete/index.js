import React from 'react';
import { FaTemperatureHigh, FaWind, FaTint } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from '~/components/Card';

// Styles
import styles from './styles.module.css';

export default function TodayComplete({ data }) {
  return (
    <Card>
      <h2 className={styles.title}>Clima hoje em São Bento do Sul</h2>

      <div className={styles.grid}>
        <div className={styles.feels}>
          <p>{Math.round(data.main.feels_like)}º</p>
          <h3>Sensação térmica</h3>
        </div>

        <div />
        <div className={styles.rowGrid}>
          <div className={styles.row}>
            <FaTemperatureHigh />
            <b>Max / Min</b>
          </div>
          <p>
            {`${Math.round(data.main.temp_min)}º/${Math.round(
              data.main.temp_max
            )}º`}
          </p>
        </div>

        <div className={styles.rowGrid}>
          <div className={styles.row}>
            <FaWind />
            <b>Vento</b>
          </div>
          <p>{data.wind.speed}km/h</p>
        </div>

        <div className={styles.rowGrid}>
          <div className={styles.row}>
            <FaTint />
            <b>Humidade</b>
          </div>
          <p>{data.main.humidity}%</p>
        </div>
      </div>
    </Card>
  );
}

TodayComplete.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    weather: PropTypes.array,
    main: PropTypes.shape({
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      humidity: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }).isRequired,
};
