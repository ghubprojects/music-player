import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
