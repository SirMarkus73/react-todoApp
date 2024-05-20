import { Header } from './components/Header/Header.jsx'
import { Nav } from './components/Nav/Nav.jsx'
import { usePages } from './hooks/usePages.jsx'

function App() {
  const { pageNow } = usePages()

  return (
    <>
      <Header />
      <aside>
        <Nav />
      </aside>
      {pageNow}
    </>
  )
}

export default App
