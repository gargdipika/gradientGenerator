// Style your elements here
import styled from 'styled-components'

export const GradientButton = styled.button`
  height: 36px;
  border: none;
  border-radius: 5px;
  width: 100px;
  background-color: #ededed;
  opacity: ${props => (props.isClick ? 1 : 0.5)};
`
export const ListElement = styled.li`
  list-style: none;
`
