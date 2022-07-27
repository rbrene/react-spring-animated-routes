import React from 'react';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { AppLayout, AppNavbarColumn, AppRoutesColumn } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';
import Router from '../routes/index';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <AppLayout>
          <AppNavbarColumn>
            <Navbar />
          </AppNavbarColumn>
          <AppRoutesColumn>
            <Router/>
          </AppRoutesColumn>
        </AppLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

