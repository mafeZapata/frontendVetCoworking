
import Medicamentos from "../src/views/pages/Medicamentos.js";
import Bovinos from "../src/views/pages/Bovinos.js";
import Tareas from "../src/views/pages/Tareasl.js";
import Termos from "../src/views/pages/Termos.js";
import controlRetiros from "../src/views/pages/controlRetiro.js";
import controlTratamientos from "../src/views/pages/controlTratamientos.js";
import controlCelo from "../src/views/pages/controlCelos.js";
import controlPartos from "../src/views/pages/controlPartos.js";
import Potreros from "../src/views/pages/Potreros.js";
import Login from "../src/views/pages/Login.js";
import Register from "../src/views/pages/Register.js";
import controlPreñez from "../src/views/pages/controlPreñez.js";
import Lecherias from "../src/views/pages/Lecherias.js";

var routes = [
  {
    path: "/Bovinos",
    name: "Bovinos",
    icon: "ni ni-world text-success",
    component: Bovinos,
    layout: "/admin",
  },
  {
    path: "/controlCelo",
    name: "Control de Celo",
    icon: "ni ni-calendar-grid-58 text-brown",
    component: controlCelo,
    layout: "/admin",
  },
  {
    path: "/controlPreñez",
    name: "Control de Preñez",
    icon: "ni ni-collection text-red",
    component: controlPreñez,
    layout: "/admin",
  },
  {
    path: "/controlPartos",
    name: "Control de Partos",
    icon: "ni ni-fat-add text-purple",
    component: controlPartos,
    layout: "/admin",
  },
  {
    path: "/controlTratamientos",
    name: "Control de Tratamientos",
    icon: "ni ni-sound-wave text-orange",
    component:  controlTratamientos,
    layout: "/admin",
  },
  {
    path: "/controlRetiros",
    name: "Control de Retiro",
    icon: "ni ni-fat-add text-red",
    component: controlRetiros,
    layout: "/admin",
  },
  {
    path: "/medicamentos",
    name: "Medicamentos",
    icon: "ni ni-briefcase-24 text-gray",
    component: Medicamentos,
    layout: "/admin",
  },
  {
    path: "/lecherias",
    name: "Producción Lechera",
    icon: "ni ni-archive-2 text-green",
    component: Lecherias,
    layout: "/admin",
  },
  {
    path: "/termos",
    name: "Termos",
    icon: "ni ni-basket text-red",
    component: Termos,
    layout: "/admin",
  },
  {
    path: "/tareas",
    name: "Tareas",
    icon: "ni ni-book-bookmark text-yellow",
    component: Tareas,
    layout: "/admin",
  },
  {
    path: "/potreros",
    name: "Potreros",
    icon: "ni ni-image text-success",
    component: Potreros,
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
