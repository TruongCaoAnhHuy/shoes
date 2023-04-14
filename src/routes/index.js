import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
]

const privateRoutes = [
    { path: '/cart', component: Cart },
]

export { publicRoutes, privateRoutes } 