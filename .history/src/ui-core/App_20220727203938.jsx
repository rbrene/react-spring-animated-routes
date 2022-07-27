import { useContext } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Main } from '../styled-components/index';
import GlobalAppDataContext from '../Helpers/context';
import { data } from '../Data';
import { AppLayout, AppNavbarColumn, AppRoutesColumn } from '../styled-components/layouts';
import Navbar from '../Components/Navbar';
import Hero from '../routes/Hero';
import About from '../routes/About';
import Portfolio from '../routes/Portfolio';
import Contact from '../routes/Contact';


export default function App() {
  console.log(<Outlet/>);
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

