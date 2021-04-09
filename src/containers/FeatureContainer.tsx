import React from 'react';
import styled from 'styled-components';
import Feture from 'components/Feture';

const techfetures = [
    { id : 1, name : 'react'}, 
    { id : 2, name : 'hooks'}, 
    { id : 3, name : 'redux'}, 
    { id : 4, name : 'styled-components'}, 
    { id : 5, name : 'typescript'}, 
]

const FetureBlock = styled.div`
    min-width : 438px;
    
    text-align : center;
    margin-top : 20px;
    padding-bottom : 50px;
    overflow : auto;
    overflow-y : hidden;
    border-bottom : 1px solid ${props=>props.theme.mjcolor.gitborder};
    
    position : relative;

    .inner{
        margin-top : 40px;
        //margin-top : 520px;
        .fetures-title{
            position: relative;  
            line-height : 1.5;                    
        }

        ul{
            margin-top : 40px;
            font-size : 0px;
            li{                
                display : inline-block;
                vertical-align : top;
                width : 32%;
                
                @media screen and (max-width : ${props=>props.theme.smallde}){
                    width : 47%;   
                    &:nth-child(3n+1){
                        margin-left : 2px;                    
                    }                 
                    &:nth-child(2n+1){
                        margin-left : 0px;
                    }
                }
                
                &+li{
                    margin-left : 2px;
                }
                &:nth-child(3n+1){
                    margin-left : 0px;                    
                }
            }
        }
    }
`

function FetureContainer(){
    return(
        <FetureBlock id = 'FetureContainerbox'>
            <div className = 'inner'>
                <div className = 'fetures-title mj-title --librarytitle'>
                    SKILL STACKS
                </div>                
                <ul id = 'fetures' className = 'clearfix'>
                    {techfetures.map(feture => { return (
                        <li><Feture  key ={feture.id} id = {feture.id} name = {feture.name}/></li>
                    )})}
                </ul>
            </div>
        </FetureBlock>
    )
}

export default FetureContainer;