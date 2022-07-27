import React from "react";
import { Routes as Switch, Route } from 'react-router-dom';
import { RoutesContainer } from '../styled-components/routes/index';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';


const Router = () => {
    return (
        <RoutesContainer>
            <Switch>
                <Route exact path='/' element={<Hero/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/contact' element={<Contact/>} />
            </Switch>
        </RoutesContainer>
    );
};

export default Router;
