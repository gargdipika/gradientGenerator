import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  Heading,
  Para,
  Box,
  UnorderedList,
  GenerateButton,
  InputContainer,
  Container,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionValue: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradientValue: `to top, #8ae323, #014f7b`,
  }

  onChangingDirection = directionValue => {
    this.setState({activeDirectionValue: directionValue})
  }

  changeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  changeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  generateGradient = () => {
    const {colorOne, colorTwo, activeDirectionValue} = this.state
    this.setState({
      gradientValue: `to ${activeDirectionValue}, ${colorOne}, ${colorTwo}`,
    })
  }

  render() {
    const {activeDirectionValue, colorOne, colorTwo, gradientValue} = this.state
    console.log(activeDirectionValue)
    console.log(gradientValue)
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
        width={100}
      >
        <GradientGeneratorContainer width={70}>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <UnorderedList>
            {gradientDirectionsList.map(eachGradient => (
              <GradientDirectionItem
                key={eachGradient.directionId}
                directionDetail={eachGradient}
                onChangingDirection={this.onChangingDirection}
                isClick={activeDirectionValue === eachGradient.value}
              />
            ))}
          </UnorderedList>
          <Para>Pick the Colors</Para>
          <InputContainer>
            <Container>
              <Para>{colorOne}</Para>
              <Box
                type="color"
                value={colorOne}
                onChange={this.changeColorOne}
              />
            </Container>
            <Container>
              <Para>{colorTwo}</Para>
              <Box
                type="color"
                value={colorTwo}
                onChange={this.changeColorTwo}
              />
            </Container>
          </InputContainer>
          <GenerateButton type="button" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </GradientGeneratorContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
