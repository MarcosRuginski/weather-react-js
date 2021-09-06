import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles.module.css';

export default function Card({ children }) {
  return <div className={styles.content}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
};
