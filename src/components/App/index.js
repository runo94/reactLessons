import { useState } from 'react';
import Button from '../Button';
import Form from '../Form'
import Input from '../Input';

import './App.css'

const NAME = 'name';
const USER_NAME = 'userName';
const EMAIL = 'email';
const PHONE = 'phone';
const PASSWORD = 'password';
const CONFIRM_PASWORD = 'confirmPassword';

function App() {

  const [data, setData] = useState(
    {
      [NAME]: '',
      [USER_NAME]: '',
      [EMAIL]: '',
      [PHONE]: '',
      [PASSWORD]: '',
      [CONFIRM_PASWORD]: '',
    }
  );




  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleBlur = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleCheckbox = () => {

  }

  console.log(data);

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

        <>
          <Input
            name="terms"
            label="Ознакомлен с правилами"
            type="checkbox"
            isChecked={isChecked}
          />
          <Button />
        </>
      </Form>
    </div>
  );
}

export default App;