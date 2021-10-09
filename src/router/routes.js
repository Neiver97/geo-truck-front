import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages Typography
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import CrearSemestre from "@/pages/CrearSemestre.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import CrearCurso from "@/pages/CrearCurso.vue";
import TableList from "@/pages/TableList.vue";
import UserRegisterForm from '../pages/UserProfile/UserRegisterForm'
import Login from '../pages/Login'
import  Location  from "../pages/Location.vue";

const routes = [
  {
    path:"/login",
    name:"login",
    component: Login
  },
  {
    path:"/user-register-form",
    component: UserRegisterForm,
    name: "user-register",
  },
  {
    path: "/",
    component: DashboardLayout,
    // redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Agregar Vehiculo",
        component: Dashboard
      },
      {
        path: "stats",
        name: "Registro usuario",
        component: UserProfile
      },
      {
        path: "crear-semestre",
        name: "crear-semestre",
        component: CrearSemestre
      },
      {
        path: "location",
        name: "localización",
        component: Location

      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "crear-curso",
        name: "Ruta",
        component: CrearCurso
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
