import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Headertoblock = styled.div<{boxname :string}>`    
    position : relative;
    .tobtn{        
        width : 80px; height : 30px;
        overflow : hidden;
        border : 1px solid #bdb2ff;        
        cursor: pointer;
        border : 2px solid #000;
        border-radius : 3px;
        
        @media screen and  (max-width : ${props=>props.theme.smallde}){
            width : 60px; height : 20px;
        }
        
        :hover::before{
            content : '';
            position : absolute;
            left : 0;
            top : 0;
            width : 100%;
            height : 100%;
            background-color : ${props=>props.theme.mjcolor.cursurbackground};
        }
    }
    .onbrowser{
        background : linear-gradient(to bottom,#b2f2bb, #40c057);
           
    }
    .notonbrowser{
        background : linear-gradient(to bottom,#f03e3e, #ffc9c9);
    }
    :hover::before{
        ${props => `content : '${props.boxname}'`};
        position : absolute;
        left : 50%;
        top : 100%;
        //width : 100%;
        background-color : ${props=>props.theme.mjcolor.gitbackground};
        transform : translateX(-50%);
        font-size : 18px;
    }
    &+&{
        margin-left : -2px;
    }
`

function convert(boxname : string) : string{
    switch(boxname){
        case 'SummaryContainer' : return 'start';
        case 'FetureContainer' : return 'skills';
        case 'InfinityContainer' : return 'archive';
        case 'IntroContainer' : return 'introduce';
        case 'FooterContainer' : return 'end';
        default : return 'x';
    }
}

type headertoprops = {id : number, boxname : string, toscroll : (to:number)=>void}

function HeaderTo({id, boxname, toscroll} : headertoprops){
    const [onBrowser, setonBrowser] = useState(false);

    let box : HTMLElement | null = null;
    const browser = document.documentElement;
    useEffect(()=>{
        //while(!box){
            box = document.getElementById(boxname.concat('box'));
        //}
        window.addEventListener('scroll', isOnBrowser);
        window.addEventListener('resize', isOnBrowser);
    },[])    

    const isOnBrowser = () =>{        
        const boxTop = box!.offsetTop;
        const boxBottom = boxTop+box!.offsetHeight;             
        var browserH = browser.clientHeight;
        var scrollP = browser.scrollTop;
        if( (boxTop <= browserH+scrollP)&&(boxBottom>= scrollP+100) ){
            setonBrowser(true);
            return;
        }
        setonBrowser(false);
    }

    const onClick = () =>{     
        toscroll(document.getElementById(boxname.concat('box'))!.offsetTop-100);               
    }

    return(
        <Headertoblock boxname = {convert(boxname)} className = 'float--left'>
            <div onClick = {onClick} className = {`tobtn ${onBrowser ? 'onbrowser' : 'notonbrowser'}`}></div>
        </Headertoblock>
    )
}
export default HeaderTo;