import DocumentHead from 'components/DocumentHead'
import Heading from 'components/Heading'
import Link from 'components/Link'

import {
  CssNavList,
  CssLi
} from './styled'

export default function (props) {
  let pageTitle = 'GIF Search'
  const {
    title
  } = props
  if (title) {
    pageTitle = `${title} | ${pageTitle}`
  }

  return (
    <div>
      <DocumentHead docTitle={pageTitle}>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </DocumentHead>
      <header>
        <Heading>GIF Search</Heading>
      </header>
      <nav className='menu'>
        <CssNavList>
          <CssLi><Link href='/'>Home</Link></CssLi>
          <CssLi><Link href='/trending'>Trending</Link></CssLi>
          <CssLi><Link href='/search'>Search</Link></CssLi>
        </CssNavList>
      </nav>
      {props.children}
      <footer />
    </div>
  )
}
