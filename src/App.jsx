import { RouterProvider } from "react-router-dom"
import { appRouter } from "./routes/routes"
import {Provider} from 'react-redux'
import { store } from "./app/store"

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
   </Provider>
  )
}
export default App