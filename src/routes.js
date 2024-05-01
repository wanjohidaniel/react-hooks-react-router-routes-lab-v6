import HomePage from './pages/HomePage'; // Import the component for the home page
import DirectorsPage from './pages/DirectorsPage'; // Import the component for the directors page
import ActorsPage from './pages/ActorsPage'; // Import the component for the actors page
import MoviePage from './pages/MoviePage'; // Import the component for the movie page

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/directors',
    component: DirectorsPage,
    exact: true
  },
  {
    path: '/actors',
    component: ActorsPage,
    exact: true
  },
  {
    path: '/movie/:id',
    component: MoviePage,
    exact: true
  }
];

export default routes;
