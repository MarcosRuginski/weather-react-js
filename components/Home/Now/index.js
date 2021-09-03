import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from '~/styles/Home.module.css';

export default function Now({ data, date }) {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <p className={styles.today}>Now</p>
        <p className={styles.city}>
          {data.name} as of {date.toString()}
        </p>
        <div className={styles.gridTemperature}>
          <div>
            <p className={styles.temperature}>{Math.round(data.main.temp)}º</p>
            <p className={styles.description}>{data.weather[0].description}</p>
          </div>

          <p>
            {Math.round(data.main.temp_min)}/{Math.round(data.main.temp_max)}
          </p>
        </div>
      </div>
    </div>
  );
}

Now.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    weather: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.string,
      temp_min: PropTypes.string,
      temp_max: PropTypes.string,
    }),
  }).isRequired,
  date: PropTypes.string.isRequired,
};
