
import Inicio from "./views/pages/inicio.js";
import Reservas from "../src/views/pages/Reservas.js";
import Login from "../src/views/pages/Login.js";
import Register from "../src/views/pages/Register.js";
import Pacientes from "../src/views/pages/Pacientes.js";


var routes = [
  {
    path: "/inicio",
    name: "VetCoworking",
    icon: "ni ni-world text-info",
    component: Inicio,
    layout: "/admin",
  },
  {
    path: "/Reservas",
    name: "Reservas",
    icon: "ni ni-archive-2 text-danger",
    component: Reservas,
    layout: "/admin",
  },
  {
    path: "/Pacientes",
    name: "Pacientes",
    icon: "ni ni-circle-08 text-success",
    component: Pacientes,
    layout: "/admin",
  },
 
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    component: Register,
    layout: "/auth",
},
  
];
export default routes;
