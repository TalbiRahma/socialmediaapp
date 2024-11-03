import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './config/routes';

function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
