import ErrorBoundary from 'components/ErrorBoundary'

import Search from 'components/Search'
import Trending from 'components/Trending'

import {
  CssAside,
  CssClearFloat,
  CssMain,
  CssSection
} from './styled'

export default function () {
  return (
    <CssMain>
      <CssSection>
        <ErrorBoundary title='Search'>
          <Search />
        </ErrorBoundary>
      </CssSection>
      <CssAside>
        <ErrorBoundary title='Trending GIFs'>
          <Trending title='Trending GIFs' />
        </ErrorBoundary>
      </CssAside>
      <CssClearFloat />
    </CssMain>
  )
}
