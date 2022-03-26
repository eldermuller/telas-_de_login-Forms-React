import { useState } from 'react';
import './style.css';
import CloseEye from '../../assets/close-eye.svg';
import OpenEye from '../../assets/open-eye.svg';

function Main() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      console.log('Preencha todos os dados corretamente...');
      return
    }

    console.log("Bem vindo", email.split('@')[0]);
  }

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <div className='container-input-password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Senha'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <img
              className='eye-icon'
              src={showPassword ? OpenEye : CloseEye}
              alt="show password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <button type='submit' className='btn-login'>Login</button>

      </form>
    </div>
  );
}

export default Main;
