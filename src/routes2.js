import TernerasLevante from "./views/pages/Reservas.js"
import TernerasDestetadas from "./views/pages/Pacientes.js";
import actualizarBovino from "./views/pages/actualizarBovino.js";
import Profile from "../src/views/pages/Profile.js";
import Register from "./views/pages/Register.js";
import Login from "./views/pages/Login.js";



var routes2 = [
    
    {
        path: "/actualizarBovino",
        name: "ActualizarBovino",
        component: actualizarBovino,
        layout: "/admin",
    },
    
    {
        path: "/TernerasLevante",
        name: "TernerasLevante",
        component: TernerasLevante,
        layout: "/admin",
    },
    {
        path: "/TernerasDestetadas",
        name: "TernerasDestetadas",
        component: TernerasDestetadas,
        layout: "/admin",
    },
    {
        path: "/perfil",
        component: Profile,
        layout: "/admin",
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/register",
        component: Register,
        layout: "/auth",
    },
    
];
export default routes2;
