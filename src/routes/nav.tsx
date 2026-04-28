import {createRoute} from "@tanstack/react-router";
import {rootRoute} from "./_root.tsx";
import {Topic} from "@/pages/doc/Topic.tsx";
import {Live} from "@/pages/live/Live.tsx";

export const navTopic = createRoute({
    getParentRoute: () => rootRoute,
    path: '/topic',
    component: () => <Topic/>
})

export const navLive = createRoute({
    getParentRoute: () => rootRoute,
    path: '/live',
    component: () => <Live/>
})


