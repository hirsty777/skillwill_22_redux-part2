import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/styles/global.css';
import router from './router';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(router)} />
  );
}

export default App;
