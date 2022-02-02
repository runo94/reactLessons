import { useState } from 'react';
import Button from '../Button';
import Form from '../Form'
import Input from '../Input';
import Checkbox from '../Checkbox'
import { validation } from '../../utils/validation';


import './App.css'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const NAME = 'name';
const USER_NAME = 'userName';
const EMAIL = 'email';
const PHONE = 'phone';
const PASSWORD = 'password';
const CONFIRM_PASWORD = 'confirmPassword';

function App() {
  const [data, setData] = useState(
    {
      [NAME]: {
        value: '',
        error: null
      },
      [USER_NAME]: {
        value: '',
        error: null
      },
      [EMAIL]: {
        value: '',
        error: null
      },
      [PHONE]: {
        value: '',
        error: null
      },
      [PASSWORD]: {
        value: '',
        error: null
      },
      [CONFIRM_PASWORD]: {
        value: '',
        error: null
      },
    }
  );

  const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.type !== 'checkbox') {
      setData({ ...data, [e.target.name]: { value: e.target.value, error: null } });
    }
  }

  const handleBlur = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: { value: e.target.value, error: validation([e.target.name], e.target.value) } });
  }

  const handleCheckbox = (e) => {

    setIsChecked(!isChecked)

  }

  return (
    <div className="app">
      <Form
        handleSubmit={handleSubmit}
      >
        <Input
          placeholder="Введите Имя"
          name={NAME}
          label="Имя"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorMsg={data[NAME].error}
        />
        <Input
          placeholder="Введите Имя Пользователя"
          name="userName"
          label="Имя Пользователя"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder="Введите Email"
          name={EMAIL}
          label="Email"
          type="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder="Введите Телефон"
          name={PHONE}
          label="Телефон"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder="Введите Пароль"
          name={PASSWORD}
          label="Пароль"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder="Введите Пароль"
          name={CONFIRM_PASWORD}
          label="Дубликат Пароля"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <Checkbox
          name="terms"
          label="Ознакомлен с правилами"
          isChecked={isChecked}
          handleCheckbox={handleCheckbox}
        />
        <Button />
      </Form>
    </div>
  );
}

export default App;