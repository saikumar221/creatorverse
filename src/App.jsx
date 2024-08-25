import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import AddCreator from './pages/AddCreator.jsx';

function App() {
  console.log("App")
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/view-creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add-creator', element: <AddCreator /> },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;