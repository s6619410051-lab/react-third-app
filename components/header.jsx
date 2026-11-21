import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">page1</Link> | <Link to="/page2">page2</Link> |{' '}
        <Link to="/page3">page3</Link>
      </div>
      <hr />
    </>
  )
}
