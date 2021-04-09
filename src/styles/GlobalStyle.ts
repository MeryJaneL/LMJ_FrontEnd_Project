import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import 'font/fonts.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        font-size : 30px;
        font-family : 'cookie';
    }
    ////버튼용///////////////////
    .btn{
        //width : 300px
        height : 34px;
        background : #eee linear-gradient(to bottom, #fcfcfc, #eee);
        border : 1px solid #d5d5d5;
        border-radius : 4px;

        display : flex;
        align-items: center;
        //justify-content : center;
        padding : 0 12px;

        font-size : 14px;
        font-weight : 500;
        line-height : 1.5;//행간격
        cursor : pointer;
        box-sizing : border-box;
        position : relative;

        color : #333;
        
        :hover::before{
            content : '';
            position : absolute;
            top : 0;
            left : 0;
            width : 100%;
            height : 100%;
            background : rgba(0,0,0,0.07);
        }

        &.--primary{
            border : 1px solid #65b836;
            color : #fcfcfc;
            background : #55a532 linear-gradient(#91dd70,#55ae2e);
        }
    }
    ///////////////인풋용////////////////////////
    input{
        &.--text{
            height : 34px;
            padding : 0 10px;
            box-sizing : border-box;
            border : 1px solid #ddd;
            border-radius : 5px;

            outline : none;
            box-shadow : inset 0 1px 2px rgba(0,0,0,0.075);

            font-size : 16px;

            :focus {
                border-color : #51a7e8;
                box-shadow : inset 0 1px 2px rgba(0,0,0,0.075), 
                            0 0 5px rgba(81,167,232, 0.5);
            }
            ::placeholder{
                color : #cacaca;
            }
        }
    }
    /////////////a용 a href 용/////////////////
    a{
        text-decoration : none;
    }
    ////////float clearfix 클리어픽스용////////    
    .clearfix::after{
                content : '';
                clear : both;
                display : block;
    }
    .float--left{
        float : left;
    }
    .float--right{
        float : right;
    }
    //////////////서머리! summary////////////////////////
    .summary{
        flex-grow : 1;
        flex-basis : 0;
        margin-right : 90px;
        //background : red;

        &.__title{
            //background : red;
            font-size : 38px;
            font-weight : 300;
            line-height : 1.25;
            margin-bottom : 18px;
        }
        &.__description{
            //background : blue;
            font-size : 26px;
            font-weight : 300;
            line-height : 1.5;
        }
    }
    //////////////깃허브식 이너 inner 가운데 모으기 div/////////
    .inner{
        max-width : 980px;
        margin : 0 auto;
        box-sizing : border-box;
        position : relative;
        font-size : 50px;
    }
    /////////////////제목과 설명////////////////////
    .--title{
        font-size : 54px;
        font-weight : 400;
        line-height : 1.25;

    }
    .--description{
        font-size : 32px;
        font-weight : 300;
        line-height : 1.5;
    }
    /////////////////////도서관 줄달린 타이틀아래///////////////////////////
    .--librarytitle{        
        ::before{
            content : '';
            position : absolute;
            top : 100%;
            left : 40%;
            width : 20%;
            height : 50%;
            background : url('images/libraryunder.png') no-repeat;
            background-size : 100%;
        }
    }
    ////////////////////////mj-title 타이틀/////////////////////////////
    .mj-title{
        font-size : 80px;

        @media screen and (max-width : ${props=>props.theme.mediumde}){
            font-size : 50px;
        } 
        @media screen and (max-width : ${props=>props.theme.smallde}){
            font-size : 34px;
        }
    }
    //////////////////mj구획 경계선 확인용!!/////////////////////////
`
export default GlobalStyle;