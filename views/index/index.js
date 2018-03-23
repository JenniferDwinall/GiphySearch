import Heading from 'components/Heading'
import SearchBar from 'components/SearchBar'
import SearchResults from 'components/SearchResults'
import Trending from 'components/Trending'

export default function (props) {
  const {
    title
  } = props

  return (
    <div>
      <Heading>{title}</Heading>
      <Trending />
      <SearchBar />
      <SearchResults />
    </div>
  )
}
