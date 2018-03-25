import styled, { css } from 'styled-components'

export const CssLi = styled.li`
  ${props => (props.modifier === 'oneColumn') && css`
    display: block;
  `}
  ${props => (props.modifier === 'fluid') && css`
    display: inline-block;
  `}
`
