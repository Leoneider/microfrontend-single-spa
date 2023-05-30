import {LocalMall} from '@lab/styleguide';
import {Paper} from '@lab/styleguide';
import {MenuList} from '@lab/styleguide';
import {MenuItem} from '@lab/styleguide';
import {ListItemText} from '@lab/styleguide';
import {ListItemIcon} from '@lab/styleguide';
import {Home} from '@lab/styleguide';
import {Store} from '@lab/styleguide';
import {Paid} from '@lab/styleguide';
import {AutoStories} from '@lab/styleguide';
import {Article} from '@lab/styleguide';
import {PointOfSale} from '@lab/styleguide';

interface Item {
  label:string;
  path: string;
  icon: JSX.Element;
}

export const items:Item[] = [
  {
    label : 'Inicio',
    path : '/home',
    icon : <Home sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Ventas',
    path : '/home',
    icon : <Paid sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Compras y Gastos',
    path : '/home',
    icon : <Store sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Productos y Servicios',
    path : '/home',
    icon : <LocalMall sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Caja y Bancos',
    path : '/home',
    icon : <PointOfSale sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Contabilidad',
    path : '/home',
    icon : <AutoStories sx={{ color: "#e8eaf6" }} />
  },
  {
    label : 'Reportes',
    path : '/home',
    icon : <Article sx={{ color: "#e8eaf6" }} />
  }
];
