import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans'
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import { Text } from 'react-native';
import { Button } from './src/components/Button';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Text>Hello World</Text> : null}
      <StatusBar style="dark" translucent />
    </ThemeProvider>
  );
}
