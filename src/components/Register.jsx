import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Spinner from '../helpers/Spinner';

const Register = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      contact: '',
      gender: '',
      password: '',
    },
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        console.log('Registered Successfully');
        history.push('/');
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
              <h4 className='text-center'>Sign Up</h4>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    className='form-control'
                    id='name'
                    name='name'
                    type='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </div>
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
                  <label htmlFor='contact'>Contact</label>
                  <input
                    className='form-control'
                    id='contact'
                    name='contact'
                    type='contact'
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                  />
                </div>
                <div id='gender-radio'>Gender</div>
                <div className='form-group'>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <input
                      type='radio'
                      id='male'
                      name='gender'
                      className='custom-control-input'
                      value='male'
                      onChange={formik.handleChange}
                    />
                    <label className='custom-control-label' htmlFor='male'>
                      Male
                    </label>
                  </div>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <input
                      type='radio'
                      id='female'
                      name='gender'
                      className='custom-control-input'
                      value='female'
                      onChange={formik.handleChange}
                    />
                    <label className='custom-control-label' htmlFor='female'>
                      Female
                    </label>
                  </div>
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
                    Sign Up
                  </button>
                  <>
                    <Link className='d-block' to='/'>
                      Click here to Sign In
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

export default Register;
