import Home from '../component/myroute/Home'
import Sports from '../component/myroute/Sports'
import Movies from '../component/myroute/Movies'
import City from '../component/myroute/City'
import Luoyang from '../component/myroute/cityList/Luoyang'
import Shanghai from '../component/myroute/cityList/Shanghai'

let routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/sports",
        component: Sports,
        exact: true
    },
    {
        path: "/movies",
        component: Movies,
        exact: true
    },
    {
        path: "/movies/:id",
        component: Movies,
        exact: true
    },
    {
        path: "/city",
        component: City,
        routes: [
            {
                path: "/city",
                component: Luoyang,
                exact: true
            }, {
                path: "/city/shanghai",
                component: Shanghai,
                exact: true
            },
            {
                404: true
            }
        ]
    },
    // {
    //     path: "/login",
    //     component: Login,
    //     exact: true
    // },
    {
        404: true
    }
]
export default routes;