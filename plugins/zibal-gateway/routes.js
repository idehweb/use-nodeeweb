import controller from "./controller.js"
export default [
    {
        "path": "/transaction/gateway/:limit",
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