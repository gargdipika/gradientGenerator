// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  width: ${props => props.width}vw;
  height: ${props => props.width}vh;
`
export const Heading = styled.h1`
  color: #ededed;
`
export const Para = styled.p`
  color: #ffffff79;
`
export const Box = styled.input`
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;

  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 90px;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50vw;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 30vw;
`
export const GenerateButton = styled.button`
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #00c9b7;
  cursor: pointer;
  height: 36px;
  width: 100px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
`
