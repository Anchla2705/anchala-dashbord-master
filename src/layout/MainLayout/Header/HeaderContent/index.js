// material-ui
import { Box, useMediaQuery, Fab, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '.5rem', width: '100%' }}>
        <Fab variant="extended" color="error" aria-label="add" sx={{ color: '#ff0003', backgroundColor: '#edc9c9' }}>
          <AddIcon sx={{ mr: 1, bgcolor: 'red', color: '#fff', borderRadius: '50%' }} />
          Add Sale
        </Fab>
        <Fab variant="extended" aria-label="add" sx={{ color: '#0084ff', backgroundColor: '#badbff' }}>
          <AddIcon sx={{ mr: 1, bgcolor: '#1890ff', color: '#fff', borderRadius: '50%' }} />
          Add Purchase
        </Fab>
        <Fab variant="extended" color="outlined" aria-label="add" sx={{ backgroundColor: '#fff', color: '#1890ff' }}>
          <AddIcon sx={{ mr: 1, bgcolor: '#1890ff', color: '#fff', borderRadius: '50%' }} />
          Add More
        </Fab>
        <Divider orientation="vertical" flexItem />
      </Box>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
