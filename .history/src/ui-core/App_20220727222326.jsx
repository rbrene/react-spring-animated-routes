import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { AppLayout, AppNavbarColumn, AppRoutesColumn } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';
import Hero from '../routes/hero/Hero';
import About from '../routes/about/About';
import Portfolio from '../routes/portfolio/Portfolio';
import Contact from '../routes/contact/Contact';


export default function App() {
  return (
    <Main>
      <GlobalAppDataContext.Provider value={data}>
        <AppLayout>
          <AppNavbarColumn>
            <Navbar />
          </AppNavbarColumn>
          <AppRoutesColumn>
            <Routes>
              <Route exact path='/' element={<Hero/>} />
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/portfolio' element={<Portfolio/>} />
              <Route exact path='/contact' element={<Contact/>} />
            </Routes>
          </AppRoutesColumn>
        </AppLayout>
      </GlobalAppDataContext.Provider>
    </Main>
  );
}

