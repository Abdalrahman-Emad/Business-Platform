// import { useSelector } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';

// import { ThemeProvider } from '@mui/material/styles';
// import { CssBaseline, StyledEngineProvider } from '@mui/material';

// // routing
// import router from 'routes';

// // defaultTheme
// import themes from 'themes';

// // project imports
// import NavigationScroll from 'layout/NavigationScroll';

// // ==============================|| APP ||============================== //

// const App = () => {
//   const customization = useSelector((state) => state.customization);

//   return (
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={themes(customization)}>
//         <CssBaseline />
//         <NavigationScroll>
//           <RouterProvider router={router} />
//         </NavigationScroll>
//       </ThemeProvider>
//     </StyledEngineProvider>
//   );
// };

// export default App;


import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { AuthProvider } from './store/AuthContext'; // Import AuthProvider

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <AuthProvider> {/* Wrap with AuthProvider */}

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            <RouterProvider router={router} />
          </NavigationScroll>
        </ThemeProvider>
      </StyledEngineProvider>
    </AuthProvider>

  );
};

export default App;