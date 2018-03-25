import ErrorBoundary from 'components/ErrorBoundary'

import Trending from 'components/Trending'

import {
  CssMain
} from './styled'

export default function (props) {
  const {
    title
  } = props

  return (
    <CssMain>
      <ErrorBoundary title={title}>
        <Trending title={title} />
      </ErrorBoundary>
    </CssMain>
  )
}
