// Write your code here
import {GradientButton, ListElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetail, isClick, onChangingDirection} = props
  const {displayText, value} = directionDetail

  const onClickingButton = () => {
    onChangingDirection(value)
  }

  return (
    <ListElement>
      <GradientButton onClick={onClickingButton} isClick={isClick}>
        {displayText}
      </GradientButton>
    </ListElement>
  )
}

export default GradientDirectionItem
