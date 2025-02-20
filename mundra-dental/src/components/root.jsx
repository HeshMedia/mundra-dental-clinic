// src/components/root.jsx
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => location.pathname} // Ensures scroll positions are unique per route
      />
      <Outlet /> {/* This renders the matched child route */}
    </>
  );
};

export default Root;