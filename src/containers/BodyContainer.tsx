import React from 'react';
import styled from 'styled-components'
import '../font/fonts.css'
import FetureContainer from './FeatureContainer';
import FooterContainer from './FooterContainer';
import HeaderContainer from './HeaderContainer';
import InfiniteContainer from './InfiniteContainer';
import IntroContainer from './IntroContainer';
import SummaryContainer from './SummaryContainer';

const BodyContainterBlock = styled.div`
    font-family : 'exile', sans-serif !important;
    font-size : 16px;
    font-weight : 400;
    color : #333;
`;

function BodyContatiner(){
    return (
        <BodyContainterBlock>
           <HeaderContainer></HeaderContainer> 
           <SummaryContainer></SummaryContainer>    
           <FetureContainer></FetureContainer>
           <InfiniteContainer></InfiniteContainer>
           <IntroContainer></IntroContainer>      
           <FooterContainer></FooterContainer>
        </BodyContainterBlock>
    )
}
export default BodyContatiner;