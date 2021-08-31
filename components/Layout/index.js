import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import axios from 'axios';

// Styles
import styles from '../../styles/Header.module.css';

// Components
import TextInput from '../Form/TextInput';

export default function Layout({ children, data, setData }) {
  const formRef = useRef();

  function handleFormSubmit(data) {
    axios
      .get(
        `weather?appid=0f3d3eab02282195d263368f22593ee1&q=${data.city}&units=metric`
      )
      .then((response) => {
        setData(response.data);
        console.log('Deu boa', response);
      })
      .catch((err) => {
        console.log('Deu ruim', err);
      });
  }

  return (
    <div className={styles.limit}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          How's the
          <br />
          weather
          <br />
          outside?
        </h1>

        <Form className={styles.form} ref={formRef} onSubmit={handleFormSubmit}>
          <div style={{ display: 'flex' }}>
            <TextInput name="city" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                />
              </svg>
            </button>
          </div>
        </Form>
      </main>
      {console.log('data', data)}
      {data?.name && (
        <div className={styles.bar}>
          {data?.name}{' '}
          <span>({`${data?.coord?.lat}, ${data?.coord?.lon}`})</span>
        </div>
      )}
      {children}
    </div>
  );
}
