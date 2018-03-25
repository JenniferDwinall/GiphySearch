import Link from 'next/link'

export default function (props) {
  const {
    children,
    href
  } = props

  return (
    <Link prefetch href={href}><a>{ children }</a></Link>
  )
}
