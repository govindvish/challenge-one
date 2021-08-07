import { NavLink, useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const { setLoading } = props;
  const history = useHistory();

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <NavLink className='navbar-brand' to='/dashboard'>
          Assign-One
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeclassname='active'
                exact={true}
                to='/dashboard'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                activeclassname='active'
                exact={true}
                to='/profile'
              >
                Profile
              </NavLink>
            </li>
            <li className='nav-item'>
              <button
                className='nav-link btn text-white'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
