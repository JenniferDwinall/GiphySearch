import styled from 'styled-components'

export const CssAside = styled.aside`
  min-width: 250px;
  max-width: 350px;
  align-content: stretch;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    max-width: 350px;
  }

  @media only screen and (min-width: 1024px) {

  }

`

export const CssClearFloat = styled.div`
  content: "";
  display: table;
  clear: both;
  visibility: hidden;
`

export const CssMain = styled.main`
  text-align: center;
`

export const CssSection = styled.section`
  min-width: 250px;
  max-width: 350px;
  align-content: stretch;
  overflow: auto;

  @media only screen and (min-width: 768px) {
    float: left;
    min-width: 400px;
  }
  @media only screen and (min-width: 1024px) {
    float: left;
  }
`
