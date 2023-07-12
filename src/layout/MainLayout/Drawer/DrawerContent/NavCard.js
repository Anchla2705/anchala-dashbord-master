// material-ui
import { Stack, Typography, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// project import
import MainCard from 'components/MainCard';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: '#00a884', m: 1 }}>
    <Stack alignItems="center" spacing={1}>
      <Avatar sx={{ bgcolor: '#fff', color: '#00a884' }}>
        <WhatsAppIcon sx={{ fontSize: '30px' }} />
      </Avatar>

      <Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h5" color="#00ff26">
            Your Personal Messenger
          </Typography>
          <IconButton aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Stack>

        <Typography variant="h6" color="white">
          integrate whatsapp to automate,
          <br /> transaction messaging
        </Typography>
      </Stack>
    </Stack>
  </MainCard>
);

export default NavCard;
