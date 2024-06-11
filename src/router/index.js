import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EventListVieuw from '@/views/EventListView.vue'
import EventDetailView from '@/views/EventDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: "/"
        },
        {
            path: '/events',
            component: EventListVieuw
        },
        {
            path: '/events/detail',
            component: EventDetailView
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundView
        },
    ]
})

export default router
