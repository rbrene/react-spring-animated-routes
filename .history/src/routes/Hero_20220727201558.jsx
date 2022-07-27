import React from "react";
import { __RouterContext } from 'react-router-dom';
import { HeroSection, HeroContainer } from '../styled-components/routes/hero/index';
import { useTransition } from '@react-spring/web';


const Hero = () => {
    console.log(__RouterContext);
    return (
        <HeroSection>
            <HeroContainer>
                Hero
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
