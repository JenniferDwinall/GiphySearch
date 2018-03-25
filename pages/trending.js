import ContentView from 'views/Trending'
import Layout from 'components/Layout'

import withData from 'lib/withData'

const Page = function () {
  const pageProps = {
    title: 'Trending'
  }

  return (
    <Layout {...pageProps}>
      <ContentView />
    </Layout>
  )
}

export default withData(Page)
