import React from "react";
import { HeroSection, HeroContainer } from '../styled-components/routes/hero/index';
import { useTransition } from '@react-spring/web';


const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                Hero
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
