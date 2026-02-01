import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Error404 from './modules/routes/errors/Error404';

import rootLoader from './modules/utilities/loaders/rootLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
        loader: rootLoader,
    },
]);

export default router;
