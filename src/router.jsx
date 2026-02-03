import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Error404 from './modules/routes/errors/Error404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error404 />,
    },
]);

export default router;
