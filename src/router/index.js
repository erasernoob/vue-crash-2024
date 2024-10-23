import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue'
import JobView from '../../views/JobView.vue'
import JobsView from '../../views/JobsView.vue'
import NotFoundView from '../../views/NotFoundView.vue'
import AddJobView from '../../views/AddJobView.vue'
import EditJobView from '../../views/EditJobView.vue'

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component : HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView, 
        },
        {
            path: '/edit/:id',
            name: 'edit-job',
            component: EditJobView, 
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
        },
        {
            path: '/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            // catchAll the resource that doesn't exist
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ],
})

export default router 