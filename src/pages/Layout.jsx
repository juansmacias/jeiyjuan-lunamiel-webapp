import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import HomeIcon from '@mui/icons-material/Home'
import Typography  from '@mui/material/Typography'
import RedeemIcon from '@mui/icons-material/Redeem'
import SettingsIcon from '@mui/icons-material/Settings'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

import {
    MemoryRouter,
    Route,
    Routes,
    Link as RouterLink,
    Outlet,
    matchPath,
    useLocation,
  } from 'react-router-dom';
  import { StaticRouter } from 'react-router-dom/server';

// function Router(props) {
//     const { children } = props;
//     if (typeof window === 'undefined') {
//         return <StaticRouter location="/home">{children}</StaticRouter>;
//     }

//     return (
//         <MemoryRouter initialEntries={['/home']} initialIndex={0}>
//         {children}
//         </MemoryRouter>
//     )
// }
  
// Router.propTypes = {
// children: PropTypes.node,
// };

function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
}



const Layout = () => {
    const routeMatch = useRouteMatch(['/regalos', '/', '/config']);
    const currentTab = routeMatch?.pattern?.path;
    console.log('currentTab: ',currentTab)
    return (
        <>
            <Box display="contents"
                alignItems="center"
                justifyContent="center" sx={{ width: 800,minHeight:800  }}
            >
                <AppBar position="static">
                    <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography align='center' variant='h4'> Jei & Juan </Typography>
                    </Toolbar>
                    </Container>
                </AppBar>
                <Outlet />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={currentTab}
                        onChange={(event, newValue) => {
                            console.log('new Route: ',newValue)
                        }}
                    >
                        <BottomNavigationAction component={RouterLink} to="/regalos" label="Regalos" icon={<RedeemIcon />} />
                        <BottomNavigationAction component={RouterLink} to="/" label="Inicio" icon={<HomeIcon />} />
                        <BottomNavigationAction component={RouterLink} to="/config" label="Config" icon={<SettingsIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    )
}

export default Layout