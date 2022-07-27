import React from "react";
import { useOutletContext } from 'react-router-dom';
import { HeroSection, HeroContainer } from '../styled-components/routes/hero/index';
import { useTransition } from '@react-spring/web';


const Hero = () => {
    const outlet = useOutletContext();
    console.log(outlet);
    return (
        <HeroSection>
            <HeroContainer>
                Hero
            </HeroContainer>
        </HeroSection>
    );
};

export default Hero;
