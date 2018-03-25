import styled from 'styled-components'

export const CssAside = styled.aside`
  min-width: 250px;
  width: 90%;
  text-align: center;

  @media only screen and (min-width: 600px) {
    float: right;
    width: 40%;
  }

  @media only screen and (min-width: 768px) {}
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
  width: 90%;

  @media only screen and (min-width: 600px) {
    float: left;
    width: 50%;
  }

  @media only screen and (min-width: 768px) {}

`
