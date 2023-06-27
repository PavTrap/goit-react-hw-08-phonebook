import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';

import { Loader } from 'components/Loader/Loader';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <div className={css.layoutheader}>
        <Navigation />
      </div>
      <div className={css.layoutmain}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};