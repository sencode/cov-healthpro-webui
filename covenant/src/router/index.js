import Router from "vue-router";
import Vue from "vue";
import Dashboard from "../views/Dashboard";
import Registration from "../views/Registration";
import SearchResults from "../views/SearchResults";
import UserInfo from "../views/UserInfo";
import SendMessage from '../views/SendMessage';
import Search from '../views/Search';

Vue.use(Router);

const routes = new Router({
    base: window.location.pathname,

    routes: [
        {
            path: "/",
            name: "root",
            type: "root",
            component: Dashboard
        },
        {
            path: "/registration",
            name: "registration",
            component: Registration
        },
        {
            path: "/sendMessage",
            name: "sendMessage",
            component: SendMessage
        },
        {
            path: "/searchResults",
            name: "searchResults",
            component: SearchResults
        },
        {
            path: "/userInfo/:patientID",
            name: "userInfo",
            component: UserInfo,
        },
        {
            path: "/search",
            name: "search",
            component: Search
        },

    ]
});

export default routes;
