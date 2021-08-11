import React, { useRef } from 'react';
import { Form } from '@unform/web';
import axios from 'axios';

// Components
import TextInput from '../Form/TextInput';

export default function Home() {
  const formRef = useRef();

  function handleFormSubmit(data) {
    console.log('data', data);

    axios
      .get(
        'weather?appid=0f3d3eab02282195d263368f22593ee1&q=S%C3%A3o%20Joaquim&units=metric'
      )
      .then((response) => {
        console.log('Deu boa', response);
      })
      .catch((err) => {
        console.log('Deu ruim', response);
      });

    /* axios
      .get(
        'weather?appid=0f3d3eab02282195d263368f22593ee1&q=S%C3%A3o%20Joaquim&units=metric'
      )
      .then(function (response) {
        console.log('Response', response.data);
      }); */
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <TextInput name="city" />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
