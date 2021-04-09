export type datastype = string[];

export const archivedata = [    
`프로젝트 기본설정 \n`+    
`1. npx creat-react-app\n\n`+
`2. 플젝폴더에서 npm install --save typescript @types/node @types/react @types/react-dom @types/jest \n`+
`혹은 yarn add typescript @types/node @types/react @types/react-dom @types/jest \n`+
`\n3.\n`+
`setupTests.ts \n`+
`logo.svg \n`+
`serviceWorker.ts \n`+
`App.test.tsx \n`+
`안쓰니까 제거하기\n`+
`\n4.\n`+
`tsconfig.json(yarn start 함 하면 나옴)에서 절대경로 설정하기\n`+
`"jsx"밑에 "baseUrl" : "src"넣기\n`+
`\n5.\n`+
`쓸 라이브러리들 설치\n`+
`스타일드컴포넌트\n`+
`yarn add styled-components\n`+
`yarn add @types/styled-components\n`+
`\n6. css 준비\n`+
`6_1.\n`+
`스타일 리셋 패키지 설치\n`+
`yarn add styled-reset\n`+
`src에 styles 폴더\n`+
`GlobalStyle.ts\n`+
`import {createGlobalStyle} from 'styled-components';\n`+
`import reset from 'styled-reset';\n`+
'const GlobalStyle = createGlobalStyle`` '+
'$붙인{reset}\n'+
`이를 디폴트로 글로벌 스타일을 지정.\n`+
`\n6_2.\n`+
`폰트는 src아래에 font폴더 만들고 폰트 파일들을 모아주며 \n`+
`font폴더에서 fonts.css에서 @font-face{font-family : '폰트이름'; src : url('해당경로')} 지정.\n`+
`쓸땐 import 'fonts.css'경로를 쓰고 지정한 폰트이름으로 쓰면된다.(font-family : '폰트이름')\n`+
`\n6_3\n`+
`theme을 쓰기위해 styles폴더에\n`+
`styled.d.ts파일 생성\n`+
`import 'styled-components';\n`+
`declare module 'styled-components'{\n`+
` export interface DefaultTheme{ 안에 커스텀 theme 객체들 형태지정 }\n`+
`}\n`+
`theme.ts를 styles폴더에 생성하고\n`+
`import {DefaultTheme} from 'styled-components';\n`+
`const theme:DefaultTheme = { 안에 theme객체들 내용지정 };\n`+
`export {theme}\n`+
`최외곽 index.tsx에서\n`+
`<ThemeProvider theme = {theme}>으로 앱을 감싸준다.\n`+
`<GrobalStyle/>을 앱위에 배치해준다.\n`+
`씸프로바이더에는 단일자식만 있어야한다.\n`+
`\n7. src아래에 쓸 폴더들 생성해두기\n`+
`api : 데이터들과 그걸 리턴하거나 쓸 함수들\n`+
`components : 컨테이너에 담을 요소들(tsx들)\n`+
`containers : 페이지에서 굵직굵직한 한 박스들(tsx들)\n`+
`hooks : 만든 커스텀 훅을 저장할곳\n`+
`modules : 리덕스와 미들웨어들관리할곳. 한 상태관리마다 하나의 폴더\n`+
`기본설정의 끝!\n`+
`퍼블릭의 index.html가다듬기\n`,

`margin : 0 auto는 요소 자체를 가운데 정렬하기\n`,

`스타일드 컴포넌트에 프롭스 전달해주기\n`+
"styled.div<{leftbase : string}>로 받고\n"+
"${ ({leftbase}) => leftbase && `left : ${leftbase};`  }\n"+
`식으로 사용해주면 된다.\n`+
"${ (props) => props.leftbase && `left : ${props.leftbase}` }\n"+
`이것도 된다\n`,

`****************************************************************\n`+
`객체 인덱스가 스트링이라고 안될땐\n`+
`타입 지정해놓은곳 가서 [key : string] : string 해주면 된다.\n`+
`********16시간의 구글링******************************************\n`,

`앱솔루트된걸 가운데정렬하려면\n`+
`left 50% 하고 transform : translate(-50%, y축용)\n`,

`map 같은 jsx안에서 개행넣고싶을땐\n`+
`{data && data.map(floor => {return <>{floor.name}<br/></>})}\n`,

`유즈레프는 돔에접근이나, 변수하나 필요할때\n`+
`useRef<HTMLInputElement>(null);돔용은 이렇게 반드시 널로넣고\n`+
`사용할땐 널체킹을 해준다\n`,

`액션을 모을 땐\n`+
`typesafe-actions 라이브러리를 사용한다\n`,

`typescript children 타입\n`+
`children : React.ReactNode,\n`,

`디폴트 프롭스 쓰는법\n`+
`함수이름.defaultProps\n`,

`자바스크립트 문자열 멀티라인\n`+
`' ' + ' '\n`,

`large Device : 데스크탑 1024px이상\n`+
`medifum device : 태블릿용 1024px이하\n`+
`small Device : 태블릿과 폰 768px이하\n`,

`index.html측\n`+
`fav콘은 퍼블릭폴더안에 index.html\n`+
`<meta http-equiv="X-UA-Compatible" content="ie=edge">\n`+
`이건 익플쓰는사람들 최신의 방식으로 렌더링하게 해주세요 어지간하면 이거쓴다.\n`+
`<meta property = 'og:type' content='타입e'>\n`+
`<meta property = 'og:title' content='타이틀'>\n`+
`이 사이트의 정보 정보가 타입, 타입은 웹사이트 이걸 밖에 내보낼때 쓴다.\n`+
`OG(open graph는 페이스북) TC(Twitter Card는 트위터)\n`,

'BEM 작명규칙\n'+
'CSS의 작명규칙\n'+
'요소의 일부분은 __를 사용\n'+
'요소의 상태는 --를 사용\n'+
'이름(ex : toggle-btn)은 -하나쓰기 일반적인 작명\n',

`그라데이션에 쓰는\n`+
`background : 바로뒤에 쓰는\n`+
`linear-gradient(to 방향, 시작색, 끝색);\n`+
`위를 밝고 아래를 어둡게 쓰는 입체감에 사용\n`,

`아랫것들을 쓰려면 일단 컨테이너를 display : flex; 해주자!\n`+
`align-items : center 는 열(수직축) 가운데\n`+
`justify-contents : center는 행(수평축) 가운데\n`+
`어라인만 쓰고 패딩 : 0 12px식으로정렬\n`+
`플렉스 하면 블록으로만드니 버튼같은건 inline-flex해주자\n`,

`포지션 없을때 추가할거면 position relative\n`,

`:hover::before\n`+
`:hover::after\n`+
`내용이 없어도 content : ''을 해놓고 사용한다`+
`그냥 hover보다 이걸 쓰는 이유\n`+
`이걸 투명도 써서 위에 덮으면 그만큼 섞이는 효과\n`,

"jsx에서 &nbsp(공백) 쓰기\n{'\\u00A0'}\n",

`input\n`+
`클릭하면 주변에 생기는 새 테두리는 outline이다!\n`+
`근데 이거 쓰기 힘들어서 그냥 outline : none해버린 뒤에\n`+
`:focus { border-color : 색;} 로 쓴다.\n\n`,

`box-shadow : 0 1px 2px red; x축 0 y축 1px 블러가 2px 색이 빨강\n`+
`똑같은 박스를 만들고 블러 크기만큼 그 박스를 키우고 이동시키는형식\n`+
`그림자를 안쪽에 할거면 inset을 x축 앞에 붙인다\n`,

`box-shadow\n`+
`포커스랑 아닌거랑 둘다 그림자가 있을 때 아닌쪽 그림자가 사라져버림\n`+
`이게 싫으면 포커스쪽 그림자 앞에 바깥 그림자를 넣어서 , 로 구분하면 둘다나온다.\n`,

`클론코딩이든 페이지를 새로 만들든 최초의 구조를 잘 파악해놓자\n`,

`a href = '#' 안정해진곳\n`+
`a태그는 기본적으로 인라인이다\n`+
`필요할땐 display : block\n`+
`text-decoration : none; 하면 밑줄 다 없애기\n`,

`float를 해제해주는 클리어픽스\n`+
`.clearfix::after{\n`+
`content : '';\n`+
`clear : both;\n`+
`display : block;\n`+
`}\n`+
`   .float--left{\n`+
`        float : left;\n`+
`    }\n`+
`    .float--right{\n`+
`        float : right;\n`+
`    }\n`+
`담을 부모요소에서 클리어픽스 해주고\n`+
`담긴 자식에서 플로트레프트 라이트해준다\n`,

`아이디가있으면 클래스보다 우선해서 사용하자.\n`+
`잡다한 요소 하나 감추고싶은데 이름부여할만큼 중요하지 않다면\n`+
`& + [type='submit']식으로 지정해버리기\n`,

`배경때매 안에께 잘 안보이면 배경을 좀 어둡게 하는 방법으로 ::before를 쓸수있다!\n`+
`어두운 투명도있는걸 앞에 끼워주는식\n`+
`::before는 지가 속한곳을 부모로 인식한다!\n`+
`앱솔루트주고 위치를 조정한 뒤 어두운 박스를 하나 넣어주기.\n`,

`top 0 left 0 width 100 height 100 은\n`+
`top 0 left 0 right 0 bottom 0 은 같다\n`,

`background-size : cover 하면 아무리 줄여도 전체를 다 덮는다.\n`+
`커버랑 100%랑 같나? \n`+
`100%하면 가로 100%를 아랫변 다쓰느라 줄어든다\n`+
`커버하면 줄어들다 만다.\n`,

`li를 주루룩 쓸때 margin-bottom 을 설정했다면\n`+
`li:last-child{}에선 0으로 설정해주자.\n`,

`flex안에서 수평정렬하려면 justify-content 해야지 text-align으론 안된다.\n`+
`다른 요소를 이놈이 찌그러뜨리는걸\n`+
`flex-grow : 1;과\n`+
`flex-basis : 0;은 남은 영역을 자연스럽게 차지하게 한다.\n`,

`JSX에서 표현해야되는 특정 단어 2개를 묶기(같이 줄바꿈 세트로 하고싶은거)\n`+
`해당 부위를 ' '공백문자 말고 &nbsp;로 하면 한단어취급을 해준다\n`,

`가로 세로 비율을 유지하는 반응형박스\n`+
`padding-top : %는 부모요소의 가로사이즈 요소영향을 받는다\n`+
`부모의 가로가 500 : x = 16 : 9\n`+
`자식에게 height로 하면 고정되버리니까 자식 height는 0주고안에 padding-top : 56.25%하면 16:9비율로 공간이 만들어진다.\n`+
`원하는 진짜 요소를 absolute 주고 부모요소 top left width height로 귀속시킨다.\n`,

`유튜브영상 우클해서 소스코드 따오기 하면된다.\n`,

`행과 열을 주는방법 1\n`+
`부모 요소에 클리어픽스\n`+
`넣을 것들을 float하고 width : 25% 혹은 50%식으로 하기.\n`+
`반드시 패딩 등을 주의해서 box-sizing을 하자`,

`이미지의 가변크기조정\n`+
`이미지 width : 100%일때라면\n`+
`이미지에 그냥 패딩을 주면 이미지가 안쭐어들고 마진준거처럼된다.(그리고 영역을 넘친다)\n`+
`box-sizing : border-box 주면 이미지가 쭈그러든다.\n`+
`이때 이미지보다 테두리가 작아지면 넘친다. 그래서 이미지의 max-width : 100%로 변경.\n`,

`float된 요소를 콕 집어서 가운데 정렬하기는 사실상 불가능하다\n`+
`감싼거에 text-align 주고 해당 요소에 display : inline-block으로 대체하자\n`+
`대신 이경우 요소사이에 여백이 발생한다!!\n`+
`1. 마진을 음수로하기\n`+
`2. 글자크기를 상위요소에서 0주고, 안에서 제대로 주기(이거쓰자)\n`+
`3. float면 안나옴.\n`+
`또 텍스트의 줄바꿈이 일어나던가 해서 축이이상할땐\n`+
`vertical-align : top등으로 해결한다.\n`,

`text-indent 는 인라인에서 안된다`,

`지도 api\n`+
`yarn add @types/googlemaps\n`+
`단순히 public에있는 index에\n`+
`<script src = 'https://maps.googleapis.com/maps/api/js'></script>\n`+
`를 넣어서 google 네임스페이스를 이용할 수 있게 만들어주고 이용.\n`+
`위의 src 뒤에 ? key=api키를 넣을수있다`,

`api키 깃허브 노출이 싫은 경우\n`+
`src밖에 .env를 만들고\n`+
`REACT_APP_API_KEY = 자신의 키\n`+
`처럼 환경변수를 하나 설정.\n`+
`.gitignore에 .env를 등록해서 깃허브올릴땐 감추기.\n`+
`쓸때는 const apiKey = process.env.REACT_APP_API_KEY해서 불러와서 씀\n`,

`async와 await\n`+
`function 앞에 async를 붙이면 함수는 항상 프로미스를 반환. 아닌걸 반환해도 이행 상태에 프로미스로 감싸서 반환한다.\n`+
`비동기작업을 하려면\n`+
`setTimeout()\n`,

`typescript에서 뭐는 널이라 안될수 있어요!!! 이게 널일수가 없는데!!! 하면 그 변수 뒤에 !를 붙여주자\n`,

`프로미스를 쓰는법\n`+
`리졸브는 성공할때 덴으로 받아오는측, reject는 실패했을때 catch로 받아오는측\n`+
`const myPromise = new Promise((resolve, reject)=>{\n`+
`            /*setTimeout(()=>{\n`+
`                resolve('resultsad')\n`+
`            }, 1000);*/\n`+
`            setTimeout(()=>{\n`+
`                reject(new Error());\n`+
`            },1000);\n`+
`        })\n`+
`        myPromise.then(results => {\n`+
`           console.log(results);\n`+
`        }).catch(e=>{\n`+
`            console.log(e, '에러');\n`+
`        })\n`+
`프로미스의 좋은점은 이 덴으로 끝난곳 뒤에 .catch나 .then을 또 붙일수있는거.\n`,

`가변 플렉스가 필요할때\n`+
`범위가 제일 유동적으로 변하는 곳에 flex-grow : 1; flex-basis : 0;\n`,

`미디어쿼리 간단정리\n`+
`@media 미디어타입 and (미디어특성){ css코드 }\n`+
`@media screen and (max-width : 1200px) { body{ color : red } }\n`+
`브라우저 크기가 1200px 이하면 컬러 레드\n\n`+
`미디어타입\n`+
`all 모든 미디어 타입에 적용 디폴트\n`+
`screen 컴퓨터 화면, 타블렛, 스마트폰 등//주로쓰는거\n`+
`print 인쇄 전용//잘 안쓴다.\n\n`+
`미디어특성\n`+
`width 뷰포트 가로너비 딱 이거일때\n`+
`max-width 뷰포트 최대 가로 너비(이하) 1200이면 1200보다 크면 안된다.\n`+
`min-width 뷰포트 최소 가로 너비(이상) 1200이면 1200보다 작으면 안된다.\n`+
`height max-height, min-height\n`+
`orientation 뷰포트 방향(portrait 세로가 긴형태, landscape 가로가 긴형태)\n`,

`브라우저 화면 크기가 변경될때마다. 작동하는 함수 등록법\n`+
`window.addEventListener('resize', function(){\n`+
`    if(window.innerWidth > 1024(이건 화면크기)){\n`+
`        함수\n`+
`    }\n`+
`});\n`,

`margin에 음수\n`+
`margin : 40px -20px 0 -20px 하면 좌우가 늘어난다!\n`+
`그런데 이때 width : 100%(부모의 크기를 따라가기때문)면 안된다 오히려 이상해진다\n`,

`JSX에서 스트링형을 때려박을때 x축이 넘치면 자동개행 이안된다\n`+
`이걸 해결하려면 white-space : pre-wrap추가\n`+
`그리고 단어 하나가 너어어무 길어도 개행이 안 될때\n`+
`단어를 뿌숴서라도 개행하려면 word-break : break all;\n`,

`비동기!\n`+
`1. setTimeout((),ms시간)\n`+
`안에 함수를 ms초 후에 실행하는 아주 간단한 비동기!\n`+
`이글 곧이 곧대로 쓰기 쓰기 힘들어서 나온\n`+
`2. Promise!\n`+
`new Promise( (resolve,error)=> { 여따셋타임아웃을 넣어주자 } )\n`+
`리조브는 성공하면 실행할거 에러는 에러나면 실행할거\n`+
`resolve(여기 리턴값) 저 결과는 이 함수를 부른곳에서 .then(result=>{result로 조회된다.})\n`+
`3. async await\n`,

`onscroll같이 기존에 리액트에 프레임워크에 있는걸쓰자 괜히 윈도우 건드리다 큰일날 수 있다.`,

`무한스크롤!\n`+
`요소 안의 스크롤을 쓰려면 window.이벤트리스너 등록말고 해당 div 온스크롤에 등록해주자 렉심하다.\n`+
`우선 해당 엘리먼트를 document.getElementById();로 받아오기\n`+
`boxH = box.clientHeight 눈에 보이는 해당 높이\n`+
`boxST = box.scrollTop 내부전체높이\n`+
`boxSH = box.scrollHeight 스크롤 움직이는거의 높낮이.\n`+
`끝에 닿은 판정은 boxH+BoxST >= boxSH 로 판정하고\n`+
`div안쪽에 데이터를 다닥 추가하면 늘어난다.\n`,

`타입스크립트의 커스텀 훅!\n`+
`커스텀 훅의 타입 파라미터는 Generic으로 설정!\n`+
`이래야 편하게 커스텀 훅 사용 가능.\n`+
`훅은 상태관리의 영향을 받지 않아요!\n`,

`interface VALUES { [key : string] : string };\n`+
`가변길이 타입을 설정해야할 경우 string값의 키를 갖는 : 스트링!\n`,


`usecallback을써서 당장 안에 타입설정부문을 회피할 수 있다\n`,

`스크롤바 디자인\n`+
`::-webkit-scrollbar {width : 20px;}\n`+
`스크롤바의 두께\n`+
`::-webkit-scrollbar-thumb {가운데 움직이는거}\n`+
`::-webkit-scrollbar-track{배경}\n`+
`여기서는 마진 패딩이 하나도 안먹어서. background-clip : padding-box로 해놓고\n`+
`보더로 투명처리해야한다.\n`,

`background-clip\n`+
`배경이미지나 배경색을 박스 중 어디 넣을지 정하는거\n`+
`기본값 : border-box : 테두리 영역과 그 안쪽영역 채우기\n`+
`padding-box : 안쪽 여백 영역과 그 안쪽 영역 채우기\n`+
`content-box : 내용 영역과 그 안쪽 영역 채우기\n`,

`margin-top이 부모의 위까지넘치게 할땐 overflow : auto를 부모에 넣어주자\n`,

`position : apsolute는 width height가 없으면 안나온다.\n`,

`백그라운드 이미지를 이미지 파일 하나 위치지정해서 쓰고싶을땐\n`+
`background-image 말고 background로 사용하기\n`+
`top 속성일때 30px면 위에서 아래로 30px민거다.\n`+
`bottom 속성일때 30px면 아래에서 위로 30px민거다.\n`+
`이때 top과 bottom만 쓰면 나오긴 하지만 수치를 주면 사라져버린다.\n`+
`박스의 한 꼭지점을 지정하고, 각각의 수치를 주는게 정석적으로 보인다.\n`,

`렌더링을 jsx에서 참거짓으로 감싸서렌더링할수도 있지만\n`+
`css에선 display : none으로 감추거나 나올수 잇다.\n`+
`opacity : 0과 1은 자리를 차지한다.\n`,

`flasy와 truesy\n`+
`true && 뭔가 : 뭔가\n`+
`false && 뭔가 : false\n`+
`'hello' && 'bye' : 'bye'\n`+
`null && 'hello' : null\n`+
`undefined && 'hello' : undefined\n`+
`'' && 'hello' : ''\n`+
`0 && 'hello' : 0\n`+
`object && object.name 식으로 유용하게 쓴다.\n`+
`||는 뭔가 falsy하면 대체해서 내보낼 용도로 사용한다.\n`+
`앞에께 true면 뒤에껄 안본다\n`,

`비구조화 할당\n`+
`function print({a,b=2}){ } 이건 b값 없을때 대비한거\n`+
`const nickname = animal.name은\n`+
`const { name : nickname } = animal과같다\n`+
`밖에서 nickname으로 사용 가능\n`+
`배열에도 가능\n`,

`브라우저 현재 스크롤 위치\n`+
`var scrollP = document.documentElement.scrollTop;`,

`브라우저 전체 높이\n`+
`var browserheight = document.documentElement.clientHeight;`,

`Y축 화면에 있나 확인\n`+
`여기서 box는 해당 엘리먼트,  browser = document.documentElement\n`+
`const boxTop = box.offsetTop;\n`+
`const boxBottom = boxTop+box!.offsetHeight;\n`+
`var browserH = browser.clientHeight;\n`+
`var scrollP = browser.scrollTop;\n`+
`if( (boxTop <= browserH+scrollP)&&(boxBottom>= scrollP) )\n`,

`긴 문장... 생략처리\n`+
`overflow : hidden;\n`+
`text-overflow : ellipsis;\n`+
`white-space : nowrap;\n`+
`얘네 디폴트값들\n`+
`overflow : auto;\n`+
`text-overflow : clip;\n`+
`white-space : normal;\n`,
]
// n미리 대기
export const sleep = (n : number) => new Promise((resolve)=>{    
    setTimeout(()=>{
        resolve('')
    }, n)
})


export async function getDatas(datas : datastype, num : number){
    await sleep(500);
    const start = num * 12;
    const end = num * 12 + 12;
    let newdatas : datastype = archivedata.slice(start, end);
    if(archivedata.length<=end) newdatas = newdatas.concat(['end']);
    return datas.concat(newdatas);
}

export async function getDatasbySearch(search : string, datas : datastype, num : number){
    await sleep(500);
    const start = num * 12;
    const end = num * 12 + 12;
    const newdummy = archivedata.filter(data => data.includes(search));
    let newdatas : datastype = newdummy.slice(start, end);
    if(newdummy.length<=end) newdatas =  newdatas.concat(['end']);
    return datas.concat(newdatas)
}
