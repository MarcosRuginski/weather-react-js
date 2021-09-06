import React from 'react';
import Image from 'next/image';
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

          <div className={styles.gridIcon}>
            <p className={styles.minMax}>
              {Math.round(data.main.temp_min)}º /{' '}
              {Math.round(data.main.temp_max)}º
            </p>

            {data.weather[0].main === 'Clouds' && (
              <Image
                src="/images/nublado.svg"
                alt="nublado"
                height={160}
                width={160}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Now.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    weather: PropTypes.array,
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
    }),
  }).isRequired,
  date: PropTypes.string.isRequired,
};
