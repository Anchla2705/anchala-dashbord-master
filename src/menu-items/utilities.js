// assets
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
// icons
const icons = {
  GroupIcon,
  CategoryIcon,
  ReceiptLongIcon,
  ShoppingCartIcon,
  AccountBalanceWalletIcon,
  AccountBalanceIcon,
  StoreIcon,
  SignalCellularAltIcon
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'GroupIcon',
      title: 'Parties',
      type: 'item',
      // url: '/typography',
      icon: icons.GroupIcon
    },
    {
      id: 'CategoryIcon',
      title: 'Items',
      type: 'item',
      // url: '/color',
      icon: icons.CategoryIcon
    },
    {
      id: 'ReceiptLongIcon',
      title: 'Sales',
      type: 'item',
      // url: '/shadow',
      icon: icons.ReceiptLongIcon
    },
    {
      id: 'ShoppingCartIcon',
      title: 'Purchase',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.ShoppingCartIcon,
      breadcrumbs: false
    },
    {
      id: 'AccountBalanceWalletIcon',
      title: 'Expanses',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.AccountBalanceWalletIcon,
      breadcrumbs: false
    },
    {
      id: 'AccountBalanceIcon',
      title: 'Cash & Bank',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.AccountBalanceIcon,
      breadcrumbs: false
    },
    {
      id: 'StoreIcon',
      title: 'My Online Store',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.StoreIcon,
      breadcrumbs: false
    },
    {
      id: 'SignalCellularAltIcon',
      title: 'Report',
      type: 'item',
      // url: '/icons/ant',
      icon: icons.SignalCellularAltIcon,
      breadcrumbs: false
    }
  ]
};

export default utilities;
