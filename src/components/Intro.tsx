import React, { useState } from 'react';
import styled from 'styled-components';

const IntrocomponentBlock = styled.div`
    width : 100%;

    .intro-title{
        cursor: pointer;
        border-bottom : 2px solid ${props=>props.theme.mjcolor.gitborder};
        padding-left : 20px;
        line-height : 1.5;
        font-size : 32px;

        overflow : hidden;
        text-overflow : ellipsis;
        white-space : nowrap;

        @media screen and (max-width : ${props=>props.theme.mediumde}){
            font-size : 28px;
        }
        @media screen and (max-width : ${props=>props.theme.smallde}){
            font-size : 24px;
        }
        &.closed{
            :hover{
                background-color : ${props=>props.theme.mjcolor.hoveractivebackground};
            }
        }
        &.opened {
            background-color : ${props=>props.theme.mjcolor.hoveractivebackground};
            color : #364fc7;

            overflow : auto;
            text-overflow : clip;
            white-space : normal;
            :hover {
                background-color : ${props=>props.theme.mjcolor.hoverclosebackground};
            }
        }
    }
    .intro-content{
        //width : 100%;
        height : 0;
        overflow : hidden;      
        padding : 0 40px 0;

        font-size : 24px;
        line-height : 1.2;
        color : ${props=>props.theme.mjcolor.mjblack};
        background-color : ${props=>props.theme.mjcolor.gitbackground};
        box-shadow: inset 0px -10px 20px rgba(200,200,200,0.4);
        white-space : pre-wrap;
        word-break : break all;
        
        @media screen and (max-width : ${props=>props.theme.mediumde}){
            font-size : 20px;
        }
        @media screen and (max-width : ${props=>props.theme.smallde}){
            font-size : 18px;
        }
        &.closed{
            height : 0;
            transition : all .3s;
        }

        &.opened {
            height : auto;
            transition : all .3s;
            padding : 40px 40px 45px;

            border-bottom : 2px solid ${props=>props.theme.mjcolor.gitborder};
        }
    }
`;
type introtype = {
    id : number,
    title : string,
    content : string,
    onopen : string
    onReset : () => void,
    onOpen : (id : number) => void,
    onClose : (id : number) => void,
}
function Intro({id, title, content, onopen, onReset, onOpen, onClose} : introtype){
    const onToggle = () => {
        (onopen === 'closed') ? openintro() : closeintro();
    }
    const openintro = () =>{
        onReset();
        onOpen(id);
    }
    const closeintro = () =>{
        onClose(id);
    }
    return(
        <IntrocomponentBlock>
            <div className = {`intro-title ${onopen}`} onClick = {onToggle} >{title}</div>
            <div className = {`intro-content ${onopen}`}>{content}</div>
        </IntrocomponentBlock>
    )
}

export default Intro;