export const navData = [
    {
        id: 1,
        to: "/",
        desc: "Home",
    },
    {
        id: 2,
        to: "/#about",
        desc: "About",
    },
    {
        id: 3,
        to: "/#menu",
        desc: "Menu",
    },
    {
        id: 4,
        to: "/reservations",
        desc: "Reservations",
    },
    {
        id: 5,
        to: "/#order",
        desc: "Order online",
    },
    {
        id: 6,
        to: "/#login",
        desc: "Login",
    },
];

export const prepareLinkState = (path, hash, className) => {
    if (hash) {
        return path + hash === className
    }

    return path === className
}