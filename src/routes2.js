import TernerasLevante from "../src/views/pages/TernerasLevante.js"
import TernerasDestetadas from "../src/views/pages/TernerasDestetadas.js";
import Novillonas from "../src/views/pages/Novillonas.js";
import VacasLactantes from "../src/views/pages/VacasLactantes.js";
import VacasOrras from "../src/views/pages/VacasOrras.js";
import Terneros from "../src/views/pages/Terneros.js";
import Toros from "../src/views/pages/Toros.js";
import Termos from "../src/views/pages/Termos.js";
import insertarBovino from "../src/views/pages/insertarTerneras.js";
import actualizarBovino from "./views/pages/actualizarBovino.js";
import Profile from "../src/views/pages/Profile.js";
import insertarMedicamentos from "./views/pages/insertarMedicamentos.js";
import actualizarMedicamento from "./views/pages/actualizarMedicamentos.js";
import genealogico from "./views/pages/genealogicos.js";
import insertarGenealogicos from "./views/pages/insertarGenealogicos.js";
import Register from "./views/pages/Register.js";
import Login from "./views/pages/Login.js";
import insertarControlesCelo from "./views/pages/insertarControlesCelo.js";
import insertarControlParto from "./views/pages/insertarControlParto.js";
import actualizarControlCelo from "./views/pages/actualizarControlCelo.js";
import insertarControlesPrenez from "./views/pages/insertarControlesPrenez.js";
import actualizarControlPreñez from "./views/pages/actualizarControlPreñez.js";
import produccionLechera from "../src/views/pages/produccionLechera.js";
import actualizarControlParto from "./views/pages/actualizarControlParto";
import controlPartos from "./views/pages/controlPartos";


var routes2 = [
    {
        path: "/produccionLechera",
        name: "Produccion Lechera",
        component: produccionLechera,
        layout: "/admin",
      },
    {
        path: "/insertarBovino",
        name: "InsertarBovino",
        component: insertarBovino,
        layout: "/admin",
    },
    {
        path: "/insertarControlesCelo",
        name: "insertarControlesCelo",
        component: insertarControlesCelo,
        layout: "/admin",
    },
    {
        path: "/insertarControlesPrenez",
        name: "insertarControlesPrenez",
        component: insertarControlesPrenez,
        layout: "/admin",
    },
    {
        path: "/insertarControlParto",
        name: "insertarControlParto",
        component: insertarControlParto,
        layout: "/admin",
    },
    {
        path: "/verGenealogia",
        name: "Genealogia",
        component: genealogico,
        layout: "/admin",
    },
    {
        path: "/insertarMedicamentos",
        name: "InsertarMedicamentos",
        component: insertarMedicamentos,
        layout: "/admin",
    },
    {
        path: "/insertarGenealogia",
        name: "InsertarGenealogia",
        component: insertarGenealogicos,
        layout: "/admin",
    },
    {
        path: "/actualizarMedicamento",
        name: "ActualizarMedicamento",
        component: actualizarMedicamento,
        layout: "/admin",
    },
    {
        path: "/actualizarBovino",
        name: "ActualizarBovino",
        component: actualizarBovino,
        layout: "/admin",
    },
    {
        path: "/actualizarControlCelo",
        name: "ActualizarControlCelo",
        component: actualizarControlCelo,
        layout: "/admin",
    },
    {
        path: "/actualizarControlPreñez",
        name: "ActualizarControlPreñez",
        component: actualizarControlPreñez,
        layout: "/admin",
    },
    {
        path: "/actualizarControlParto",
        name: "ActualizarControlParto",
        component: actualizarControlParto,
        layout: "/admin",
    },
    {
        path: "/controlPartos",
        name: "ControlPartos",
        component: controlPartos,
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
        path: "/Novillonas",
        name: "Novillonas",
        component: Novillonas,
        layout: "/admin",
    },
    {
        path: "/VacasLactantes",
        name: "VacasLactantes",
        component: VacasLactantes,
        layout: "/admin",
    },
    {
        path: "/VacasOrras",
        name: "VacasOrras",
        component: VacasOrras,
        layout: "/admin",
    },
    {
        path: "/Terneros",
        name: "Terneros",
        component: Terneros,
        layout: "/admin",
    },
    {
        path: "/Toros",
        name: "Toros",
        component: Toros,
        layout: "/admin",
    },
    {
        path: "/Termos",
        name: "Termos",
        component: Termos,
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
