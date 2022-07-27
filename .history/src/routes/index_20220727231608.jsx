import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { RoutesContainer } from '../styled-components/routes/index';
import Hero from './hero/Hero';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import { useTransition } from '@react-spring/web';


const Router = () => {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: {
            transform: 'translateX(100%) scale(0%)',
            overflowY: 'hidden',
        },
        enter: {
            transform: 'translateX(0%) scale(100%)',
            overflowY: 'auto',
        },
        leave: {
            transform: 'translateX(-100%) scale(0%)',
            overflowY: 'hidden',
        },
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        }
    })

    return transitions((style, item) => (
        <RoutesContainer style={style}>
            <Routes location={item}>
                <Route exact path='/' element={<Hero/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </RoutesContainer>
    ))
};

export default Router;
