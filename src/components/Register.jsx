import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Spinner from '../helpers/Spinner';

const Register = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    // Validate Name
    if (!values.name) {
      errors.name = 'Name is required.';
    } else if (!values.name.match(/^[a-zA-Z]+( {1}[a-zA-Z]+)*$/)) {
      errors.name = 'Please enter valid name.';
    } else {
      delete errors.name;
    }

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

    // Validate Contact Number
    if (!values.contact) {
      errors.contact = 'Contact Number is required.';
    } else if (!String(values.contact).match(/^\d{10}$/)) {
      errors.contact = 'Please enter valid contact number.';
    } else {
      delete errors.contact;
    }

    // Validate Gender
    if (!values.gender) {
      errors.gender = 'Gender is required.';
    } else {
      delete errors.gender;
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
      name: '',
      email: '',
      contact: '',
      gender: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        console.log('Registered Successfully');
        history.push('/');
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
              <h4 className='text-center'>Sign Up</h4>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>
                    Name<span className='text-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    id='name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? (
                    <div className='text-danger'>{formik.errors.name}</div>
                  ) : null}
                </div>
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
                  <label htmlFor='contact'>
                    Contact<span className='text-danger'>*</span>
                  </label>
                  <input
                    className='form-control'
                    id='contact'
                    name='contact'
                    type='number'
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                  />
                  {formik.errors.contact ? (
                    <div className='text-danger'>{formik.errors.contact}</div>
                  ) : null}
                </div>
                <div id='gender-radio'>
                  Gender<span className='text-danger'>*</span>
                </div>
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
                  {formik.errors.gender ? (
                    <div className='text-danger'>{formik.errors.gender}</div>
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
