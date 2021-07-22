// import { Link as ScrollLink } from 'react-scroll';
import { Outlet } from 'react-router-dom';
// material
// import { Box, Link, Container } from '@material-ui/core';
// components
// import Logo from '../../components/Logo';
//
import MainNavbar from './TopBar/TopBar';
// import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {
  // const { pathname } = useLocation();
  // const isHome = pathname === '/';

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {/* {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default'
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link href="https://minimals.cc/">FocusR</Link>
            </Typography>
          </Container>
        </Box>
      )} */}
    </>
  );
}
