import { Provider } from 'jotai'
import Layout from './layout/App'
import { store } from './store/store'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
      <Toaster position="top-center" theme="light" richColors />
    </Provider>
  )
}

export default App
