import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const router = createBrowserRouter([
    {
      path : '/',
      element : <Login />,
      errorElement : <PageNotFound></PageNotFound>
    },
    {
      path : '/login',
      element : <Login></Login>
    },
    {
      path : '/register',
      element : <Register></Register>
    },
    {
      path : '/home',
      element : <Home></Home>
    }
  ])

  export default router;