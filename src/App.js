import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { AppBar, SideMenu } from './components';
import { DrawerHeader, Main } from './components/styled';
import Routes from './Routes';

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* application top bar */}
        <AppBar open={open} setOpen={setOpen} />
        {/* side menu */}
        <SideMenu open={open} setOpen={setOpen} />
        <Main open={open}>
          <DrawerHeader />
          {/* app routes */}
          <Routes />
        </Main>
      </Box>
    </Router>
  );
}

export default App;
