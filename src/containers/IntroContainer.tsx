import Intro from 'components/Intro';
import React, { useReducer } from 'react';
import styled from 'styled-components';

type introtype = {id : number, title : string, content : string, onopen : string }
type introstype = introtype[]
const introcontents : introstype = [
    {
        id : 1,
        title : '왜 React, 프론트엔드인가?',
        content : '최초로 Front-End를 선택하게 된 계기는 간단했습니다. 단순히 어떤 사이트를 이용하다가 나도 이런 사이트를 만들어보고 싶다는 생각이 들었습니다. 막연히 근처 서점에서 html, jsp책을 사서 웹에 대한 공부를 하였고, 그렇게 어느 정도 기초를 다졌습니다. 그러다가 사이트를 이루는 데이터분야에 빠져서 잠깐 mysql과 같은 데이터 관련 언어를 공부하기도 했습니다. 본격적으로 공부를 시작하기 위해 패스트캠퍼스에서 강의를 하나 구매하기로 했습니다. 기왕 하는김에 프레임워크를 이용해 이전에 미흡했던 js와 html을 보충하기 위해 리액트 강의를 구매하고 공부하였습니다. 그러다가 리액트, 리덕스와 미들웨어의 연계와, 체계적인 구조를 익히게 되고나서부턴 완전히 이쪽에 익숙해졌습니다. 그리고 앞으로의 취업방향도 확실히 Front-End로 정하게 되었습니다.',
        onopen : 'closed',
    },
    {
        id : 2,
        title : '프론트엔드 공부 과정에서 가장 가치있던 일',
        content : '강의로 이론과, 구조를 쌓아올리는 토대를 익혔습니다. 허나 막상 맨바닥에서 페이지를 하나 만들자니 막막한 기분이였습니다. 다른 개발자들의 조언을 듣고, 페이지를 하나 클론코딩했습니다. 정말 이론을 아는것과 달리, 실제로 해당 페이지를 만들자니 온갖 오류와, 이건 어떻게 해야하지? 하는 문제에 부딪히게 되었습니다. 그것들을 실제로 방법을 찾고, 적용해서 쌓아나간 그 경험과 지식의 축적이 가장 가치있던 경험이였습니다.',
        onopen : 'closed',
    },
    {
        id : 3,
        title : '개발자라는 직군을 선택한 이유',
        content : '어린 시절부터 컴퓨터로 하는 일을 좋아했습니다. 뭔가 행동을 하면 그에 반응하는 것과, 그 틀을 만들어가는 프로그래밍도 좋아했습니다. 그 결과가 바로바로 화면에 보이는 프론트엔드는 그런 측면에서 도전해볼 가치가 있었고, 이 분야의 개발자를 선택하게 되었습니다.',
        onopen : 'closed',
    },
    {
        id : 4,
        title : 'JS? TS?',
        content : '사실 자바스크립트를 익히게 된지는 오래 되지 않았습니다. 공부하며 든 생각은, 다른 언어들에 비해 파이썬과 같이 형 지정없이 변수, 함수 등을 선언해서 사용하는 것이 분명히 대규모 프로젝트에선 문제가 생길거라고 생각했습니다. 그러던 와중에 추가로 배우게 된 타입스크립트라는걸 알게 되자마자 이걸 사용하자고 마음먹게 되었습니다. 그로 인해 이것저것 오류가 터지고, 추가 시간이 걸리게 되었지만, 형태를 꽉 잡아준다는 이유 하나만으로 타입스크립트를 선호하게 되었습니다.',
        onopen : 'closed',
    },
    {
        id : 5,
        title : 'etc',
        content : '앞으로는 프론트엔드 기술을 더 숙달해가며, 백엔드 기술도 기초부터 익혀갈 예정입니다.',
        onopen : 'closed',
    },
]
//자기소개 내용들
type actiontype = 
    | {type : 'RESET_TOGGLE'}
    | {type : 'OPEN_TOGGLE', id : number}
    | {type : 'CLOSE_TOGGLE', id : number}
function reducer(state : introstype, action : actiontype) : introstype{    
    switch (action.type){
        case 'RESET_TOGGLE' : {          
            return state.map(intro => {return {...intro, onopen : 'closed', }});
        }
        case 'OPEN_TOGGLE' :{
            return state.map(intro => {
                return (intro.id === action.id) ? {...intro, onopen : 'opened'} : intro;
            });
        }
        case 'CLOSE_TOGGLE' : {            
            return state.map(intro=>{
                return (intro.id === action.id) ? {...intro, onopen : 'closed'} : intro;
            });
        }
        default :
            return state;
    }
}

const IntroBlock = styled.div`
    margin-top : 60px;
    min-width : 438px;
    .inner{
        .intros-title{   
            text-align : center;   
            position : relative;
            line-height : 1.5;
        }
        .intros{
            margin-top : 60px;
            border-top : 2px solid ${props=>props.theme.mjcolor.gitborder};
        }
    }
`;

function IntroContainer(){
    const [Intros, dispatch] = useReducer(reducer, introcontents);
    const onReset = () => {dispatch({type :'RESET_TOGGLE'})}
    const onOpen = (id : number) => {dispatch({type : 'OPEN_TOGGLE', id : id})}
    const onClose = (id : number) => {dispatch({type : 'CLOSE_TOGGLE', id : id})}

    return(
        <IntroBlock id = 'IntroContainerbox'>
            <div className = 'inner'>
                <div className = 'intros-title mj-title --librarytitle'>
                    ABOUT ME
                </div>
                <div className = 'intros'>
                    {Intros.map(intro => {
                        return(
                            <Intro key ={intro.id} id = {intro.id} title = {intro.title} content = {intro.content} onopen = {intro.onopen}
                                        onReset = {onReset} onClose = {onClose} onOpen = {onOpen}/>
                        )
                    })}
                </div>
            </div>            
        </IntroBlock>
    )
}

export default IntroContainer;

