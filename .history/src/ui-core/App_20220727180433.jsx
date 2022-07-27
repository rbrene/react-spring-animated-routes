import React from 'react';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { AppLayout, AppNavbarColumn, AppRoutesColumn } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <AppLayout>
          <AppNavbarColumn>
           <Navbar />
          </AppNavbarColumn>
          <AppRoutesColumn>
            fcc portfolio with advanced animations
          </AppRoutesColumn>
        </AppLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

