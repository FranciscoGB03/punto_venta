import Homepage from "./components/Homepage/Homepage";
import NotFound from "./components/Template/NotFound";
import PermisosAdmin from "./components/Admin/Permisos/Permisos";
import Configuracion from "./components/Admin/Configuracion/Configuracion";
import Rol from "./components/Catalogos/Rol/Rol";
import SeccionPermiso from "./components/Catalogos/SeccionPermiso/SeccionPermiso";
import Permiso from "./components/Catalogos/Permiso/Permiso";
import Configuraciones from "./components/Catalogos/Configuraciones/Configuraciones";
import TipoConfiguracion from "./components/Catalogos/TipoConfiguracion/TipoConfiguracion";
import Proveedores from './components/Catalogos/Proveedores/Proveedores';


const ROUTES = [
    {exact: true, path: '/', component: Homepage},
    {exact: true, path: '/admin/permisos', component: PermisosAdmin},
    {exact: true, path: '/admin/configuracion', component: Configuracion},    
    {exact: true, path: '/catalogos/proveedores', component: Proveedores},
    {exact: true, path: '/catalogos/rol', component: Rol},
    {exact: true, path: '/catalogos/seccionPermiso', component: SeccionPermiso},
    {exact: true, path: '/catalogos/permiso', component: Permiso},
    {exact: true, path: '/catalogos/tipoConfiguracion', component: TipoConfiguracion},
    {exact: true, path: '/catalogos/configuraciones', component: Configuraciones},    
    {component: NotFound}
];
export default ROUTES;
