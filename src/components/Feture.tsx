import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FetureBlock = styled.div`
    box-sizing : border-box;
    border : 1px solid ${props=>props.theme.mjcolor.gitborder};
    border-radius : 10px;
    background-color : ${props=>props.theme.mjcolor.cosmic_siam};
    opacity : 0;
    &.aniclass{        
        animation : fadeup 1s;
        @keyframes fadeup{
            from{ opacity : 0; transform : translateY(200px);}
            to{opacity : 1; transform : translateY(0);}
        }        

        opacity : 1;
    }


    .imgbox{
        width : 100%;      
        
        //비율맞추기
        .imgbox-ratio{
            height : 0;
            padding-top : 100%;
            position : relative;
            //진짜 담는 빡스
            .realimgcontainer{
                
                position : absolute;
                top : 0;
                left : 0;
                width : 100%;
                height : 100%;
                img{
                    width : 100%;
                    height : 100%;
                    max-width : 100%;
                    max-height : 100%;
                    padding : 10px;
                    box-sizing : border-box;                    
                }
            }
        }
    }
    //기술명
    .techname{
        width : 100%;
        height : 50px;
        border-top : 1px solid ${props=>props.theme.mjcolor.gitborder};
        font-size : 30px;
        display : flex;
        justify-content : center;
        align-items : center;
        color : #ffffff;
        box-sizing : border-box;

        overflow : hidden;

        @media screen and (max-width : ${props=>props.theme.mediumde}){
                font-size : 24px;
            }
    }
`;

type fetureprops = {
    id : number;
    name : string;
}

function Feture({id, name} : fetureprops){
    const [aniclass, setaniclass] =  useState('');

    useEffect(()=>{
        window.addEventListener('scroll', scrollcheck);
    })
    const removeevent = () => {
        window.removeEventListener('scroll', scrollcheck);
    }

    const scrollcheck = () => {
        const target = document.getElementById(`feture_${id.toString()}`);
        const clientRect = target?.getBoundingClientRect();
        const relativeBottom = clientRect?.bottom;
        const winh = window.innerHeight;
        if((relativeBottom!) <= winh){
            setaniclass('aniclass')
            removeevent();
        }
    }

    return(
        <FetureBlock id = {`feture_${id.toString()}`} className ={aniclass}>
            <div className = 'imgbox'>
                <div className = 'imgbox-ratio'>
                    <div className = 'realimgcontainer'>
                        <img src = {`images/techs/${name}.png`} alt = {name}/>
                    </div>                  
                </div>
            </div>
            <div className = 'techname'>
                {name}
            </div>
        </FetureBlock>
    )
}

export default Feture;