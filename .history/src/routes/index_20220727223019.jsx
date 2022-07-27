import React from "react";
import { Routes as Switch, Route } from 'react-router-dom';
import { RoutesWrapper } from '../styled-components/routes/index';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';


const Router = () => {
    return (
        <RoutesWrapper>
            <Switch>
                <Route exact path='/' element={<Hero/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/contact' element={<Contact/>} />
            </Switch>
        </RoutesWrapper>
    );
};

export default Router;
