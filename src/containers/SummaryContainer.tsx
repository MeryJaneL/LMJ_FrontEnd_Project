import React from 'react';
import styled from 'styled-components';
import 'font/fonts.css';
import TypingAnime from 'components/TypingAnime';

const summaries = {
    mjtitle : '안녕하세요\n'
              + '신입 프론트엔드 개발자 이명재입니다',
    mjdescription : '이 페이지는 React, styled-conmponents로 이루어져 있습니다.'
}

const SummaryBlock = styled.div`
    position : relative;
    width : 100%;
    min-width : 438px;
    background-color : ${props=>props.theme.mjcolor.gitbackground};
    margin-top : 100px;
    font-family : 'cookie';    
    border-bottom : 1px solid ${props=>props.theme.mjcolor.gitborder};
    box-sizing : border-box;
    .inner{     
        padding : 30px 0;
        .--title{
            @media screen and (max-width : ${props=>props.theme.mediumde}){
                font-size : 45px;
            }
            @media screen and (max-width : ${props=>props.theme.smallde}){
                font-size : 30px;
            }
            
        }
        .--description{
            color : ${props=>props.theme.mjcolor.grayfont};
            @media screen and (max-width : ${props=>props.theme.mediumde}){
                font-size : 27px;
            }
            @media screen and (max-width : ${props=>props.theme.smallde}){
                font-size : 20px;
            }
        }
    }
`;

function SummaryContainer(){
    return(
        <SummaryBlock  id = 'SummaryContainerbox' >
            <div className = 'inner'>
                <div className = 'anime --title'>
                    <TypingAnime id = {1} contents = {summaries.mjtitle}/>                    
                </div>                
                <div className = 'anime --description'>
                    <br/>
                    <TypingAnime id = {2} contents = {summaries.mjdescription}/>                    
                </div>
            </div>
        </SummaryBlock>
    )
}

export default SummaryContainer;