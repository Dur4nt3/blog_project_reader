import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import AllArticles from './modules/routes/allArticles/AllArticles';
import Article from './modules/routes/article/Article';
import Signup from './modules/routes/root/Signup';

import Error404 from './modules/routes/errors/Error404';

import rootLoader from './modules/utilities/loaders/rootLoader';
import allArticlesLoader from './modules/utilities/loaders/allArticlesLoader';
import articleLoader from './modules/utilities/loaders/articleLoader';

import signupAction from './modules/utilities/actions/signupAction';

import FullscreenLoader from './modules/utilities/miscUI/FullscreenLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
        loader: rootLoader,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/articles',
        element: <AllArticles />,
        errorElement: <Error404 />,
        loader: allArticlesLoader,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/articles/:articleId',
        element: <Article />,
        errorElement: <Error404 />,
        loader: articleLoader,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: 'signup',
        element: <Signup />,
        errorElement: <Error404 />,
        action: signupAction,
        hydrateFallbackElement: <FullscreenLoader />,
    },
]);

export default router;
