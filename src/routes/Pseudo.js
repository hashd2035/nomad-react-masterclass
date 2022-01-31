import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
    display: flex;
`

const rotateAnimation = keyframes`
    0% {
        transform:rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform:rotate(360deg);
    }
    100% {
        transform:rotate(0deg);
        border-radius: 0px;
    }    
`;

const Emoji = styled.span`
    font-size: 36px;
`

const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation:${rotateAnimation} 1s linear infinite;
    /* span {
        font-size: 36px;
        &:hover {
            font-size:98px;
        }
        &:active {
            opacity: 0;
        }
    } */
    ${Emoji} {
        &:hover {
            font-size:98px;
        }
    }
    /* span: hover {} */
`



function Pseudo() {
  return <Wrapper>
    <Box>
        <Emoji>😎</Emoji> 
        {/* this span is not inside Box component, but, you can select this in styled component */}
    </Box>
    <Emoji>⛅ </Emoji> 
  </Wrapper> 
}

export default Pseudo;
