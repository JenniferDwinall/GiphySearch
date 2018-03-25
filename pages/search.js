import ContentView from 'views/Search'
import Layout from 'components/Layout'

import withData from 'lib/withData'

const Page = function () {
  const pageProps = {
    title: 'Search'
  }

  return (
    <Layout {...pageProps}>
      <ContentView {...pageProps} />
    </Layout>
  )
}

export default withData(Page)
