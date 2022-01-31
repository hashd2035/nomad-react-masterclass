import styled from "styled-components"

const Title = styled.h1`
    color: ${props => props.theme.textColor}
`

const Wrapper = styled.div`
`


function Theme() {
  return <Wrapper>
    <Title>Theme</Title>
  </Wrapper> 
}

export default Theme;
