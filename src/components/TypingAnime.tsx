import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//타이핑 애니메이션 컴포넌드.
const TypingBlock = styled.div<{animeid : string}>`
        display : inline-block;

        white-space : pre-wrap;
        word-break : break-all;        

        ${props => `.makecursor-${props.animeid}`}{
            display : inline;   
            font-weight : 100;     


            -webkit-animation-name : mjcursor;
            -webkit-animation-duration : 0.5s;
            -webkit-animation-iteration-count : infinite;
            @-webkit-keyframes mjcursor{
                0%{color : transparent}
                50%{color : #000000}
                100%{color :  transparent}
            }

            -moz-animation-name : mjcursor;
            -moz-animation-duration : 0.5s;
            -moz-animation-iteration-count : infinite;
            @-moz-keyframes mjcursor{
                0%{color : transparent}
                50%{color : #000000}
                100%{color :  transparent}
            }

            -ms-animation-name : mjcursor;
            -ms-animation-duration : 0.5s;
            -ms-animation-iteration-count : infinite;
            @-ms-keyframes mjcursor{
                0%{color : transparent}
                50%{color : #000000}
                100%{color :  transparent}
            }

            -o-animation-name : mjcursor;
            -o-animation-duration : 0.5s;
            -o-animation-iteration-count : infinite;
            @-o-keyframes mjcursor{
                0%{color : transparent}
                50%{color : #000000}
                100%{color :  transparent}
            }

            
            animation-name : mjcursor;
            animation-duration : 0.5s;
            animation-iteration-count : infinite;
            @keyframes mjcursor{
                0%{color : transparent}
                50%{color : #000000}
                100%{color :  transparent}
            }
        }
`;

type typingProps = {
    id : number,
    contents : string,
}

function TypingAnime({id, contents} : typingProps){
    const [typetext, settypetext] = useState('');
    let typingIdx = 0;
    let typingtxt = contents.split('');

    useEffect(()=>{        
            setInterval(typing, 100);       
    },[])
    let thread = '';
    const typing = () => {
        if(typingIdx<typingtxt.length){
            thread = thread.concat(typingtxt[typingIdx]);
            settypetext(thread);
            typingIdx++; 
          } else{ 
            clearInterval();
          }
    }
    return(
        <TypingBlock className = {`typinganime-${id.toString()}`} animeid = {id.toString()}>
            {typetext}
            <div className = {`makecursor-${id.toString()}`}>|</div>      
        </TypingBlock>
    )
}

export default TypingAnime;