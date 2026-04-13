
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <AppRoutes />
    </Provider>

)
