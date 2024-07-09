
import { Provider } from 'react-redux'
import appStore from './Utils/store/appStore'
import { router } from './Utils/router';
import { RouterProvider } from 'react-router-dom';
function App() {
  
  return (
    
   <Provider store={appStore}>
    <RouterProvider router={router}/>
    
    </Provider>
  );
}

export default App;
