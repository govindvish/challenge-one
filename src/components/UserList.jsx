import { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = () => {
    axios({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json',
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Contact No</th>
            <th scope='col'>Gender</th>
          </tr>
        </thead>
        <tbody>
          {userData.length !== 0 ? (
            userData.map((user) => {
              return (
                <tr key={user.email}>
                  <th scope='row'>{user.name}</th>
                  <td>{user.email}</td>
                  <td>{user.contact_number}</td>
                  <td>{user.gender}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className='text-center' colSpan='4'>
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
