import { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import Spinner from '../helpers/Spinner';

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    // Validate Email
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (
      !values.email.match(
        /^([a-zA-Z0-9_\-.]+)@((([a-z0-9]+\.)+))([a-z]{2,4})(\]?)$/
      )
    ) {
      errors.email = 'Please enter valid email.';
    } else {
      delete errors.email;
    }

    // Validate Password
    if (!values.password) {
      errors.password = 'Password is required.';
    } else {
      delete errors.password;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        history.push('/dashboard');
        setLoading(false);
      }, 1000);
    },
  });

  return (
    <>
      <div className='container min-vh-100'>
        <div className='row min-vh-100 justify-content-center align-items-center'>
          {!loading ? (
            <div className='col col-sm-12 col-md-4 p-5 login-card my-3'>
              <h4 className='text-center'>Sign In</h4>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>
                    Email<span className='text-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div className='text-danger'>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    Password<span className='text-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    id='password'
                    name='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div className='text-danger'>{formik.errors.password}</div>
                  ) : null}
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
