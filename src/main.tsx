import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.tsx'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Table</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
