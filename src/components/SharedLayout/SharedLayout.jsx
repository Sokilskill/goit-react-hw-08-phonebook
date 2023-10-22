import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader padding={40} size="xl" />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
