import { UserController } from "./controller/UserController";
import { TutorialController } from "./controller/TutorialController";

export const Routes = [
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "all"
    },
    {
        method: "get",
        route: "/users/:id",
        controller: UserController,
        action: "one"
    },
    {
        method: "post",
        route: "/users",
        controller: UserController,
        action: "save"
    },
    {
        method: "delete",
        route: "/users/:id",
        controller: UserController,
        action: "remove"
    },
    {
        method: "get",
        route: "/tutorials",
        controller: TutorialController,
        action: "all"
    },
    {
        method: "get",
        route: "/tutorials/:id",
        controller: TutorialController,
        action: "one"
    },
    {
        method: "post",
        route: "/tutorials",
        controller: TutorialController,
        action: "save"
    },
    {
        method: "put",
        route: "/tutorials/:id",
        controller: TutorialController,
        action: "update"
    },
    {
        method: "delete",
        route: "/tutorials/mass_delete",
        controller: TutorialController,
        action: "removeAll"
    },
    {
        method: "delete",
        route: "/tutorials/:id",
        controller: TutorialController,
        action: "remove"
    }
];