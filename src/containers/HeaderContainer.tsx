import HeaderTo from 'components/HeaderTo';
import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    width : 100%;
    min-width : 438px;
    height : 100px;
    position : fixed;
    top : 0;
    background-color : ${props=>props.theme.mjcolor.hoverclosebackground};

    z-index : 500;

    box-shadow : inset 0 -10px 10px rgba(0,0,0,0.2);

    .inner{
        height : 100%;
    //왼쪽
     .headerleft{      
        .logo{
            background : url('./mjlogo.png');
            background-size : 80px;
            width : 80px;
            height : 80px;
            margin : 10px;
            position : relative;
            text-indent : -9999px;
            :hover{
                cursor: pointer;
                ::before{
                    content : '';
                    position : absolute;
                    top : 0; left : 0; width : 100%; height : 100%;
                    background-color : ${props=>props.theme.mjcolor.cursurbackground};
                }
            }
        }        
    }
    //제목
    .header-title{
        display : inline-flex;
        float : left;
        height : 100%;        
        align-items : center;
        margin-left : 20px;
        @media screen and  (max-width : 605px){
            display : none;
        }
    }
    //오른쪽
     .headerright{  
        &.btnbox{                      
            height : 100%;
            display : inline-flex;
            align-items : center;
            .inbox{
                //background-color : gray;
                box-shadow : 0 0 10px #bdb2ff;
            }
        }

    }
    }
`
function HeaderContainer(){

    const toscroll = (to : number) =>{     
        window.scrollTo(0, to);        
    }
    const reloada = ()=>{
        window.location.reload();
    }

    return(
        <HeaderBlock className = 'clearfix'>
            {/* 왼쪽부분 */}
          <div className = 'inner clearfix'>

            <div className = 'headerleft float--left'>
                <div  onClick = {reloada} className = 'logo'><a href = '#'>MJ허브</a></div>                
            </div>
            <div className = 'header-title float--left'>
                <div className = 'header-title-inbox'>MJ허브</div>
            </div>
            {/* 오른쪽부분 */}
            <div className = 'headerright btnbox float--right'>
                <div className = 'inbox clearfix'>
                <HeaderTo toscroll = {toscroll} key = {1} id = {1} boxname = 'SummaryContainer'/>
                <HeaderTo toscroll = {toscroll} key = {2} id = {2} boxname = 'FetureContainer'/>
                <HeaderTo toscroll = {toscroll} key = {3} id = {3} boxname = 'InfinityContainer'/>
                <HeaderTo toscroll = {toscroll} key = {4} id = {4} boxname = 'IntroContainer'/>
                <HeaderTo toscroll = {toscroll} key = {5} id = {5} boxname = 'FooterContainer'/>
                </div>
            </div>

            </div>
        </HeaderBlock>
    )
}

export default HeaderContainer;