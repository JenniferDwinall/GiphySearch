import ContentView from 'views/index/index'
import Layout from 'components/Layout'

export default function () {
  const data = {
    title: 'GIF Searcher'
  }

  return (
    <Layout>
      <ContentView {...data} />
    </Layout>
  )
}
