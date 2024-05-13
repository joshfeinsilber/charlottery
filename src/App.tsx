import { Provider } from 'jotai'
import Layout from './layout/App'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
