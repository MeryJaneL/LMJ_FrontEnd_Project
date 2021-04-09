import React, { useEffect } from 'react';
import styled from 'styled-components';
import {BiPhoneIncoming, BiMailSend} from 'react-icons/bi'

const FooterBlock = styled.div`
    background-color : ${props=>props.theme.mjcolor.gitbackground};
    margin-top : 50px;
    padding-top : 30px;
    border-top : 1px solid ${props=>props.theme.mjcolor.gitborder};
    
    min-width : 438px;

    
    @media screen and (max-width : ${props=>props.theme.smallde}){
        padding-top : 0px;                 
        }
    .inner{
        .footertitle{
            margin-top : 40px;
            margin-bottom : 30px;
            text-align : center;
            line-height : 1.5;
            position : relative;
            
        }
        .contentbox{
            margin-top : 20px;
            font-size : 28px;
            line-height : 1.2;

            color : ${props=>props.theme.mjcolor.mjblack};

            @media screen and (max-width : ${props=>props.theme.smallde}){
                font-size : 24px;
                .float--left{
                    float : none;
                    text-align : center;
                    border-top : 1px solid ${props=>props.theme.mjcolor.gitborder}
                }
                .float--right {
                    float : none;
                    text-align : center;
                    border-top : 1px solid ${props=>props.theme.mjcolor.gitborder}
                }
            }
            .info-title{
                text-align : center;
                color : ${props=>props.theme.mjcolor.grayfont};
                font-size : 24px;
                @media screen and (max-width : ${props=>props.theme.smallde}){
                    font-size : 20px;                    
                }
            }
        }
    }
`

function FooterContainer(){

    return(
        <FooterBlock id = 'FooterContainerbox'>
            <div className = 'inner '>
                <div className = 'footertitle mj-title --librarytitle'>CONTACT ME</div>
                <div className = 'contentbox clearfix'> 
                    <div className = 'phone float--left'>
                        <div className = 'info-title'>phone-number<BiPhoneIncoming/></div>
                        010-9151-0393
                    </div>
                    <div className = 'email float--right'>
                        <div className = 'info-title'>mail-address<BiMailSend/></div>
                        mjlee994@gmail.com
                    </div>
                </div>
            </div>
        </FooterBlock>
    )
}

export default FooterContainer;