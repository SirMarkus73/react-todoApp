import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './global-syles/index.css'
import { PageContextProvider } from './providers/PageContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageContextProvider>
    <App />
  </PageContextProvider>,
)
