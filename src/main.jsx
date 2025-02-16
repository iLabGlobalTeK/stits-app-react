import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import RoleSelection from './pages/RoleSelection';
import TeacherRoute from './pages/TeacherRoute';
import LessonsManager from './pages/LessonsManager';
import LessonPlanner from './feature/LessonPlanner';
import PrincipalLessonsManager from './pages/LessonsManagerP';

// Create a Material-UI theme with the specified colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#A2C470', // Green color as primary
      contrastText: "#FFF"
    },
    secondary: {
      main: '#2724E6', // Blue color as secondary
    },
    background: {
      default: '#f4f6f8', // Light background for light mode
      paper: '#ffffff',   // Paper background for light mode
    },
    text: {
      primary: '#000000', // Default text color
      secondary: '#666666', // Secondary text color
    },
  },
  components: {
    MuiButton: {
      variants: "contained",
      styleOverrides: {
        root: {
          borderRadius: '50px', // Rounded border radius for all buttons
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelection />,
  },
  {
    path: "/teacher",
    element: <TeacherRoute />,
    children: [
      {
        path: "",
        element: <LessonsManager />,
      },
      {
        path: "add",
        element: <LessonPlanner />
      },
    ],
  },
  {
    path: "/principal",
    element: <PrincipalLessonsManager />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
