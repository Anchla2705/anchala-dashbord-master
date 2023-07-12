import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Stack, Avatar, Typography, Badge, IconButton } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { styled } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
// import Logo from 'components/Logo';
import avatarImage from 'assets/images/users/avatar-1.png';
// ==============================|| DRAWER HEADER ||============================== //

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 25,
  height: 25,
  border: `2px solid ${theme.palette.background.paper}`
}));

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar>
              <IconButton aria-label="Close">
                <AddCircleOutlinedIcon />
              </IconButton>
            </SmallAvatar>
          }
        >
          <Avatar alt="Travis Howard" src={avatarImage} sx={{ width: 60, height: 60, border: '1px solid' }} />
        </Badge>
        <Typography variant="h4">Machinery And Pa...</Typography>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
