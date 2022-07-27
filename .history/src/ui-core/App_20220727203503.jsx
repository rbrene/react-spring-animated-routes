import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { AppLayout, AppNavbarColumn, AppRoutesColumn } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';
import Hero from '../routes/Hero';
import About from '../routes/About';
import Portfolio from '../routes/Portfolio';
import Contact from '../routes/Contact';
import { animated as a } from '@react-spring/web';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <AppLayout>
          <AppNavbarColumn>
            <Navbar />
          </AppNavbarColumn>
          <AppRoutesColumn>
            <a.Routes>
              <Route exact path='/' element={<Hero/>} />
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/portfolio' element={<Portfolio/>} />
              <Route exact path='/contact' element={<Contact/>} />
            </a.Routes>
          </AppRoutesColumn>
        </AppLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

