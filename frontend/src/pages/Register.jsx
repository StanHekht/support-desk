import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              name='name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              name='email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              name='password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              id='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm your password'
              name='password2'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
