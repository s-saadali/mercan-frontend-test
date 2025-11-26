import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import dashboard from '@/views/dashboard.vue'


const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: layout,
        children: [
            {
                name: "dashboard",
                path: "/dashboard",
                component: dashboard,
                meta: { title: "Dashboard" }
            },
            {
                name: "documents",
                path: "/documents",
                component: () => import('@/views/documents.vue'),
                meta: { title: "Documents" }
            },
            {
                name: "benefits",
                path: "/benefits",
                component: () => import('@/views/benefits.vue'),
                meta: { title: "Benefits" }

            },
            {
                name: "my_payslips",
                path: "/my_payslips",
                component: () => import('@/views/my_payslips.vue'),
                meta: { title: "My Payslips" }

            },
            {
                name: "leaves",
                path: "/leaves",
                component: () => import('@/views/leaves.vue'),
                meta: { title: "Leaves" }

            },
            {
                name: "my_information",
                path: "/my_information",
                component: () => import('@/views/my_information.vue'),
                meta: { title: "My Information" }
            },
            {
                name: "my_team",
                path: "/my_team",
                component: () => import('@/views/my_team.vue'),
                meta: { title: "My Team" }
            },
            {
                name: "organizational_chart",
                path: "/organizational_chart",
                component: () => import('@/views/organizational_chart.vue'),
                meta: { title: "Organizational Chart" }
            },
            {
                name: "timesheet",
                path: "/timesheet",
                component: () => import('@/views/timesheet.vue'),
                meta: { title: "Timesheet" }
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
