import React from 'react';

import Weather from 'components/Weather';

import { useTheme, ThemeProvider } from '@material-ui/core/styles';

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Weather>Test</Weather>
    </ThemeProvider>
  );
};

export default App;
