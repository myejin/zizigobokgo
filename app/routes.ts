import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("invitations/:invitationKey", "routes/main.tsx"),
    // route("invitations/:invitationKey/edit", "routes/edit.tsx"),
] satisfies RouteConfig;
