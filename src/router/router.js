import { createRouter, createWebHistory } from "vue-router";

// import all future components to link to (e.g. Home, About, Shop,...)
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// make routes for router to route to
const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
];

// the magical stuff
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;