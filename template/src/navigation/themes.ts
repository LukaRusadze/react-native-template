import {
  DarkTheme as RNDarkTheme,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

const LightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    text: '#000000',
  },
};

const DarkTheme: Theme = {
  dark: true,
  colors: {
    ...RNDarkTheme.colors,
    background: '#000000',
    card: '#000000',
    text: '#FFFFFF',
  },
};

export { LightTheme, DarkTheme };
