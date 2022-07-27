import React from 'react';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { GridLayout } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <GridLayout>
          <Navbar/>
          fcc portfolio with advanced animations
        </GridLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

