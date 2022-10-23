import controller from "./controller.js"
export default [
    {
        "path": "/:offset/:limit",
        "method": "get",
        "access": "admin_user",
    },
    {
        "path": "/importFromSorooshan",
        "method": "get",
        "access": "customer,admin",
        "controller": controller.importFromSorooshan,

    },
]