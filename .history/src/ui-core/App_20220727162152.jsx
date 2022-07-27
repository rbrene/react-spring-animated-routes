import React from 'react';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { GridLayout } from '../styled-components/layouts';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <GridLayout>
          fcc portfolio with advanced animations
        </GridLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

