import { useState } from 'react';

import Spinner from '../helpers/Spinner';
import Navbar from './Navbar';
import UserList from './UserList';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Navbar loading={loading} setLoading={setLoading} />
      <>
        <div className='container-fluid'>
          {!loading ? (
            <div className='container my-5'>
              <h3 className='text-center mb-3'>Dashboard</h3>
              <UserList />
            </div>
          ) : (
            <div className='row min-vh-100 justify-content-center align-items-center'>
              <Spinner />
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Dashboard;
