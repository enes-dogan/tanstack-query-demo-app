import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Events from './components/Events/Events.tsx';
import EventDetails from './components/Events/EventDetails.tsx';
import NewEvent from './components/Events/NewEvent.tsx';
import EditEvent from './components/Events/EditEvent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events" />,
  },
  {
    path: '/events',
    element: <Events />,

    children: [
      {
        path: '/events/new',
        element: <NewEvent />,
      },
    ],
  },
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
