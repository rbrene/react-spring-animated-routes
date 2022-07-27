import React from "react";
import { useLocation } from 'react-router-dom';
import { HeroSection, HeroContainer } from '../../styled-components/routes/hero/index';
import { useTransition } from '@react-spring/web';


const Hero = () => {
    const location = useLocation();
    const transitions = useTransition();
    return (
        <HeroSection>
            <HeroContainer>
                Hero
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
