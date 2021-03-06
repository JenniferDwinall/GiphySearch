import ContentView from 'views/Index/index'
import Layout from 'components/Layout'

import withData from 'lib/withData'

const Page = function () {
  const pageProps = {
    title: 'Homepage'
  }

  return (
    <Layout {...pageProps}>
      <ContentView />
    </Layout>
  )
}

export default withData(Page)
