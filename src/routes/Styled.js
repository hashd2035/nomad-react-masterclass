import styled from "styled-components"

const Father = styled.div`
  display: flex;
`
const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`
const Circle = styled(Box)`
  border-radius: 50px;
`
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`
const Text = styled.h1`
  color: white;
`
const BoringInput = styled.input`
  background-color: tomato;
`
const SexyInput = styled.input.attrs({required: true, minLength: 10})`
  background-color: teal;
`

function Styled() {
  return (
    <div>
      <Father>
          <Box bgColor="teal">
            <Text>Hello</Text>
          </Box>
          <Circle bgColor="tomato" />
      </Father>
      <BoringInput required />
      <BoringInput required />
      <BoringInput required />

      <SexyInput />
      <SexyInput />
      <SexyInput />


      <Btn>Click me</Btn>      
      <Btn as="a" href="/">Or Click me</Btn>
    </div>
  );
}

export default Styled;
