import ErrorBoundary from 'components/ErrorBoundary'
import NoSSR from 'react-no-ssr'

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
        <NoSSR>
          <ErrorBoundary title='Search'>
            <Search modifier='fluid' limit='6' />
          </ErrorBoundary>
        </NoSSR>
      </CssSection>
      <CssAside>
        <NoSSR>
          <ErrorBoundary title='Trending GIFs'>
            <Trending title='Trending GIFs' limit='5' modifier='oneColumn' />
          </ErrorBoundary>
        </NoSSR>
      </CssAside>
      <CssClearFloat />
    </CssMain>
  )
}
