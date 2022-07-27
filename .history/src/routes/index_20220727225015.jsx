import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppRoutesColumn } from '../styled-components/layouts/index';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import { useTransition } from '@react-spring/web';


const Router = () => {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: {
            rotateX: 180,
        },
        enter: {
            rotateX: 0,
        },
        leave: {
            rotateX: 180
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return transitions((style, item) => (
        <AppRoutesColumn style={style}>
            <Routes location={item}>
                <Route exact path='/' element={<Hero/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </AppRoutesColumn>
    ))
};

export default Router;
