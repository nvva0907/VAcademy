import HomePage from "../page/home_page/HomePage.jsx";
import Roadmap from "../page/backend_page/roadmap/Roadmap.jsx";
import Git from "../page/version_control_systems/git/git.jsx";

export const routers = [
    {
        path: "/",
        component: <HomePage/>
    },
    {
        path: "/rm",
        component: <Roadmap/>
    },
    {
        path: "/git",
        component: <Git/>
    }
]