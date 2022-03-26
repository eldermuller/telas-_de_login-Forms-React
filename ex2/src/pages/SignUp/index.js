import { useState } from 'react';
import BackgroundImage from '../../assets/background.jpg';
import OpenEye from '../../assets/open-eye.svg';
import CloseEye from '../../assets/close-eye.svg';
import './style.css';
import WomanSuccess from '../../assets/woman-success.png'

function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submit, setSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setAlert(true);
      return
    }

    setAlert(false);

    setSubmit(true);

  }

  function handleChangeInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleClearInput() {
    setForm({
      name: '',
      email: '',
      password: ''
    });

    setAlert(false);
  }



  return (
    <div className='container'>
      <div className='container-login'>
        {submit
          ?
          <div className='div-success'>
            <img src={WomanSuccess} alt='Success image' />
            <strong>Cadastro efetuado com sucesso!</strong>
          </div>
          :
          <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <div>
              <div className='container-inputs'>
                <input
                  name='name'
                  value={form.name}
                  type='text'
                  onChange={(event) => handleChangeInput(event)}
                  placeholder='Nome'
                />
                <input
                  name='email'
                  value={form.email}
                  type='email'
                  onChange={(event) => handleChangeInput(event)}
                  placeholder='E-mail' />
                <div className='input-password'>
                  <input
                    name='password'
                    value={form.password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => handleChangeInput(event)}
                    placeholder='Senha'
                  />
                  <img
                    className='eye-icon'
                    src={showPassword ? OpenEye : CloseEye}
                    alt='eye icon'
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
              {alert && <div className='div-span'><span>Preencha todos os campos!</span></div>}
            </div>
            <button type='submit' className='btn-login'>Cadastrar</button>
            <button type='button' onClick={() => handleClearInput()} className='btn-cancel'>Cancelar</button>
            <span>Já tem cadastro? <a>Clique aqui!</a></span>
          </form>}
      </div>
      <div className='div-image'>
        <img src={BackgroundImage} alt='background' />
      </div>
    </div>
  );
}

export default SignUp;
