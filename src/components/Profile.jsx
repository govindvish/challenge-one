/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Spinner from '../helpers/Spinner';
import logo from '../assets/images/user_profile.svg';

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const getData = () => {
    axios({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json',
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar loading={loading} setLoading={setLoading} />
      <>
        {!loading ? (
          <div className='container my-5'>
            <h3 className='text-center mb-3'>User Profile</h3>
            <div className='row justify-content-center'>
              <div className='col col-sm-12 col-md-6'>
                <div className='card mb-3 p-3'>
                  <div className='row no-gutters'>
                    <div className='col-md-4'>
                      <img
                        style={{ maxWidth: '100%' }}
                        src={logo}
                        alt='Profile Image'
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>{data.name}</h5>
                        <p className='card-text'>{data.email}</p>
                        <p className='card-text'>{data.contact_number}</p>
                        <p className='card-text'>{data.gender}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='row min-vh-100 justify-content-center align-items-center'>
            <Spinner />
          </div>
        )}
      </>
    </div>
  );
};

export default Profile;
