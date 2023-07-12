// assets
import { DashboardOutlined } from '@ant-design/icons';
import HomeIcon from '@mui/icons-material/Home';
// icons
const icons = {
  DashboardOutlined,
  HomeIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.HomeIcon,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
