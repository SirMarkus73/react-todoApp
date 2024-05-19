import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {

  return (
    <>
        <Header />
        <main>
            <aside>
                <Nav />
            </aside>
            <section>
                <h2>Content</h2>
            </section>
        </main>
    </>
  )
}

export default App
