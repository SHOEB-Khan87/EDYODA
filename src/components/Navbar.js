import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import React from 'react';
import Button from '@mui/material/Button';
import edyoda from "../images/EDYODA.png"
import MenuItem from '@mui/material/MenuItem';
import drop from "../images/Vector.png"
import SearchIcon from '@mui/icons-material/Search';
import button from "../images/but.png"
export default function Navbar() {
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar color="default" position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>


            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 6,
                display: { xs: 'none', md: 'none', lg: "flex", alignItems: "center" },
                fontFamily: 'Raleway',
                fontStyle: "normal",
                fontSize: "38px",
                fontWeight: 900,
                letterSpacing: '0.03rem',
                color: 'inherit',
                width: "158px",
                height: "40px",
                textDecoration: 'none',
              }}
            >
              <img src={edyoda} alt="edyoda" />
            </Typography>
            <Typography

              noWrap
              component="a"
              href=""
              sx={{
                marginLeft: "64px",

                display: { xs: 'none', md: 'none', lg: "block" },
                flexGrow: 1,
                fontSize: "16px",
                fontStyle: "normal",
                width: "61px",
                height: "19px",
                color: 'black',
                fontWeight: "500",

                textDecoration: 'none',
              }}
            >
              Courses <img style={{ width: "12px", height: "7.42px", marginLeft: "6px" }} src={drop} alt="drop" />
            </Typography>
            <Typography

              noWrap
              component="a"
              href=""
              sx={{

                display: { xs: 'none', md: 'none', lg: "block" },
                flexGrow: 5.3,
                fontFamily: 'monospace',
                width: "73px",
                height: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",

                color: 'black',
                textDecoration: 'none',
              }}
            >
              programs <img src={drop} style={{ width: "12px", height: "7.42px", marginLeft: "6px" }} alt="drop" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'block', lg: "none", },
                }}
              >

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ marginLeft: "40px" }} textAlign="center">Courses <img style={{ width: "12px", height: "7.42px", marginLeft: "6px" }} src={drop} alt="drop" /></Typography>
                </MenuItem>
                <MenuItem sx={{ marginLeft: "35px" }} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Programs <img style={{ width: "12px", height: "7.42px", marginLeft: "6px" }} src={drop} alt="drop" /></Typography>
                </MenuItem>
                <MenuItem sx={{ xs: "none", md: "block", mr: 2.5, display: { xs: 'block', md: 'block', lg: "none" } }}>
                  <Button textAlign="center">Log in</Button>
                </MenuItem>
                <MenuItem sx={{ display: { xs: 'block', md: 'block', lg: "none" } }} >
                  <img src={button} alt="button" />
                </MenuItem>


              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'block', md: 'block', lg: "none" },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0.03rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={edyoda} alt="edyoda" />
            </Typography>



            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>

              <MenuItem  >
                <SearchIcon sx={{ width: "18px", height: "18px", mr: 3 }} />
              </MenuItem>

              <MenuItem sx={{ xs: "none", md: "block", mr: 3, display: { xs: 'none', md: 'none', lg: "block" } }}>
                <Typography textAlign="center">Log in</Typography>
              </MenuItem>
              <MenuItem sx={{ mr: 5, display: { xs: 'none', md: 'none', lg: "block" } }} >
                <img src={button} alt="button" />
              </MenuItem>



            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}




