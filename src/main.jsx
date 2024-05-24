import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './global-styles/index.css'
import { PageContextProvider } from './providers/PageContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageContextProvider>
    <App />
  </PageContextProvider>,
)
