import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'}> Home</NavLink>
        <NavLink to={'/tweets'}>Tweets cards</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
