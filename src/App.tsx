import React from 'react';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import Weather from 'components/Weather';

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Weather>Test</Weather>
      </ThemeProvider>
    </>
  );
};

export default App;
