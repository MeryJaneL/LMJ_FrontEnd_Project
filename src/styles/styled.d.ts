import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        largede : string,//데스크탑
        mediumde : string,//태블릿, 작은화면
        smallde : string,//폰

        mjcolor : {
            //검은색계통
            realblack : string,
            zinmuk : string,//금속
            karazeclible : string,//천
            siam : string,//푸른빛이 도는 고급 검정
            cosmic_siam : string,//최고급
            moonlightblack : string,//붉은빛이도는검정
            mjblack : string,//보랗빛검정(로고색)
            //회색계통
            grayfont : string,//금속배경글자.
            //흰색계통
            gitbackground : string,
            gitborder : string,
            //노란색계통
            librarytitle : string,
            //푸른색계통
            cursurbackground : string,
            hoveractivebackground : string,
            hoverclosebackground : string,
            borderofrealback : string,
        }
    }
}