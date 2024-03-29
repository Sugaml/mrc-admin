import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserAction } from '../action/user';


const mdTheme = createTheme();

const settings = ['Logout'];

export const ResponsiveAppBar = ({ children }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.UserInfo.user);

  React.useEffect(() => {
    dispatch(getUserAction(token))
  }, [dispatch, token])

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingMenu = (handleKeys) => (event) => {
    setAnchorElUser(null);
    if (!handleKeys) return
    navigate("/" + handleKeys.toLowerCase())
  };

  return (
    <div>
      <ThemeProvider theme={mdTheme} >
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ display:'flex',justifyContent:'space-between' }} >
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/dashboard"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MRC
              </Typography>
               {
                user &&
               <Box sx={{ display:'flex',float:'right' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.firstname} src={user.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleSettingMenu(setting)} >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
}
            </Toolbar>
          </Container>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }} >
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </div >
  );
};
export default ResponsiveAppBar;
