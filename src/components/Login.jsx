import { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import Spinner from '../helpers/Spinner';

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        history.push('/dashboard');
        setLoading(false);
      }, 2000);
    },
  });

  return (
    <>
      <div className='container min-vh-100'>
        <div className='row min-vh-100 justify-content-center align-items-center'>
          {!loading ? (
            <div className='col col-sm-12 col-md-4 p-5 login-card'>
              <h4 className='text-center'>Sign In</h4>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control'
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control'
                    id='password'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className='text-center'>
                  <button className='btn btn-primary mb-3' type='submit'>
                    Sign In
                  </button>
                  <>
                    <Link className='d-block' to='/register'>
                      Click here to Sign Up
                    </Link>
                  </>
                </div>
              </form>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
