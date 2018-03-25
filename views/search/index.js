import ErrorBoundary from 'components/ErrorBoundary'

import Search from 'components/Search'

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
        <Search title={title} />
      </ErrorBoundary>
    </CssMain>
  )
}
