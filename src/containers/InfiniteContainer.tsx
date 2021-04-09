import { RootState } from 'modules';
import { calldata, resetdata, calldatasearch } from 'modules/infinityscroll';
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';

const Infiniteblock = styled.div`
    background-color : ${props=>props.theme.mjcolor.gitbackground};
    border-bottom : 1px solid ${props=>props.theme.mjcolor.gitborder};
    padding-top : 30px;
    padding-bottom : 30px;
    overflow : auto;
    min-width : 438px;
    .inner{
        
        overflow : auto;
        position : relative;
        background-color : ${props=>props.theme.mjcolor.cosmic_siam};
        box-sizing : border-box;        
        
    //제목
    .infinity-title{
        overflow : auto;
        position : relative;
        font-size : 50px;
        text-align : center;
        color : ${props=>props.theme.mjcolor.librarytitle};
        text-shadow : 0 0 10px #ffff00;
        
        @media screen and (max-width : ${props=>props.theme.smallde}){
            font-size : 30px;
        }
        .title-top{
            position : absolute;
            top : 0;
            width : 100%;
            height : 29px;
            background : url('images/띠2.jpg') left top;            
        }
        .title-content{
            margin-top : 29px;
            margin-bottom : 29px;
            background : url('images/띠2.jpg') no-repeat left top -29px;
        }
        .title-bottom{            
            position : absolute;
            bottom : 0;
            width : 100%;
            height : 29px;
            background : url('images/띠2.jpg') left bottom;
        }
    }
    //짧은 설명과 버튼
    .infinity-description{
        font-size : 16px;
        text-align : center;
        line-height : 1.5;
        color : ${props=>props.theme.mjcolor.grayfont};

        overflow-y : hidden;

        .toggle-btn{
            position : relative;
            width : 30px;
            height : 30px;
            margin : 0 auto;
            font-size : 30px;
            line-height : 1;
            

            :hover::before{
                content : '';
                position : absolute;
                top : -10%; left : -10%;
                width : 120%;
                height : 120%;
                border-radius : 50%;
                background-color : ${props=>props.theme.mjcolor.cursurbackground};
                cursor: pointer;
            }
        }
    }
    //인풋
    #searchinput{
        width : 300px;
        display : block;
        margin : 0 auto;
        margin-top : 10px;
        margin-bottom : 10px;
    }
    //무한스크롤박스
    #infinitebox{
        //width : 100%;
        height : 400px;
        overflow-y : scroll;
        background-color : ${props=>props.theme.mjcolor.zinmuk};
        color  : ${props=>props.theme.mjcolor.grayfont};
        box-sizing : border-box;

        white-space : pre-wrap;
        word-break : break-all;

        margin-right : 10px;
        margin-left : 10px;
        margin-bottom : 20px;
        font-size : 30px;
        text-align : left;        

        @media screen and (max-width : ${props=>props.theme.mediumde}){
                font-size : 25px;
            }
        @media screen and (max-width : ${props=>props.theme.smallde}){
                font-size : 20px;
            }
        ///로딩중///
        .loadingbox{
            display : block;
            margin-top : 5px;
            text-align : center;
            img{ display : block; margin : 0 auto}
        }
        ///스크롤바///
        ::-webkit-scrollbar {
            width : 10px;            
        }
        ::-webkit-scrollbar-thumb {
            background-color : #2f3542;
            background-clip : padding-box;

            border-radius : 4px;
            border-left : 1px solid transparent;
            border-right : 1px solid transparent;
        }
        ::-webkit-scrollbar-track{
            //box-sizing : border-box;
            border-radius : 5px;
            background-color : ${props=>props.theme.mjcolor.grayfont};
        }
    }    
    .notopen{
        text-align : center;
        color : ${props=>props.theme.mjcolor.grayfont};
        font-size : 16px;
        line-height : 1.5;
        overflow-y : hidden;
    }
}
`

function InfiniteContainer(){   
    
    const {loading, data, error, end} = useSelector((state:RootState)=>state.infinityreducer);
    const dispatch = useDispatch();

    const [search, setinput] = useState('');
    const [toggle, settogle] = useState(false);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value);        
        dispatch(resetdata(data!, e.target.value));
    }
    const onToggle = () => {
        settogle(!toggle);
        setinput('');
        if(!toggle) dispatch(resetdata(data!, search));
    }
/////////무한스크롤용 함수/////////////////////////////
    const infinityScroll = (e : React.UIEvent<HTMLDivElement>) =>{  
        const box = document.getElementById('infinitebox');        
        const boxH = box!.clientHeight; // 눈에 보이는 네모
        const boxST = box!.scrollTop; // 내부 전체높이
        const boxSH = box!.scrollHeight; //스크롤 움직이는거의 높낮이
             //끝에 닿았으면?//그리고 데이터 끝이 아니면
        if((boxH+boxST+10 >= boxSH) && !end){
            search ? dispatch(calldatasearch(search, data!)) : dispatch(calldata(data!));
        }
    }
    ///////////////////////////////무한스크롤용함수



    useEffect(()=>{        
        dispatch(calldata([]));
    },[])

    //if(error) return <div>에러!!</div>;
    //if(!data) return <div>아직없음</div>


    return (
            <Infiniteblock id = 'InfinityContainerbox'>
                {(!error && data) ? (
                <div className = 'inner'>
                <div className = 'infinity-title'>
                    <div className = 'title-top'/>
                    <div className = 'title-content'>MJ 아카이브</div>
                    <div className = 'title-bottom'/>
                </div>
                <div className = 'infinity-description'>
                    겪은 경험을 기록하는 저장소<br/>
                    <div onClick = {onToggle} className = 'toggle-btn'>
                    <GiHamburgerMenu/>
                    </div>
                </div>
            {toggle ? 
                <div>
            <input onChange = {onChange} id = 'searchinput' className = '--text' value = {search} placeholder = '검색어를 입력해주세요'/>
            <div id = 'infinitebox' onScroll = {infinityScroll}>
                
            {data ? data.map(data => {return <>{data}<br/></>}) : '없음'}   
            {loading ?
                <div className = 'loadingbox'>
                    <img src = './images/loading/loading.gif'/>
                    데이터를 찾는 중입니다.
                </div> 
                    : ''}         
            {end ? <div className = 'loadingbox'>
                    <img src = './images/loading/nomore.gif'/>
                    데이터가 더 없습니다!
                </div> 
                    : ''}     
            {!end && !loading ? <div className = 'loadingbox'>
                    <img src = './images/loading/nextpage.gif'/>
                    다음페이지!
                </div> 
                    : ''}
            </div>
                </div>
            : <div className = 'notopen'>메뉴를 클릭해주세요</div>}
            </div>

                ) : '에러!!'}
            </Infiniteblock>
    )
}

export default InfiniteContainer;