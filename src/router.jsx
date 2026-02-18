import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import AllArticles from './modules/routes/allArticles/AllArticles';
import Error404 from './modules/routes/errors/Error404';

import rootLoader from './modules/utilities/loaders/rootLoader';
import allArticlesLoader from './modules/utilities/loaders/allArticlesLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
        loader: rootLoader,
    },
    {
        path: '/articles',
        element: <AllArticles />,
        errorElement: <Error404 />,
        loader: allArticlesLoader,
    }
]);

export default router;
