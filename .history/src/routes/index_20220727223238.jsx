import React from "react";
import { Routes as Switch, Route } from 'react-router-dom';
import { AppRoutesColumn } from '../styled-components/layouts/index';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';


const Router = () => {
    return (
        <AppRoutesColumn>
            <Switch>
                <Route exact path='/' element={<Hero/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/contact' element={<Contact/>} />
            </Switch>
        </AppRoutesColumn>
    );
};

export default Router;
