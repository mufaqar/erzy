import { mobileSize, tabletSize } from '../constants/general'

export default {
  // Temp fonts
  fonts: {
    title: 'Raleway, sans-serif',
    main: 'Roboto, sans-serif',
  },
  // Colors for layout
  colors: {
    background1: '#fff',
    background2:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #07A3B2',
    background3:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #667EEA;',
    primary1: '#333333',
    accent1: '#07A3B2',
    secondary1: '#667EEA',
    gray1: '#F1F1F1',
    gradient1: ' linear-gradient(70.91deg, #07A3B2 0%, #667EEA 100%);',
    gradient2:
      'linear-gradient(70.91deg, rgba(110, 3, 128, 0.17) 0%, rgba(73, 255, 255, 0.24) 100%)',
    gradient3: 'linear-gradient(70.91deg, #6E0380 0%, #49FFFF 100%)',
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: `screen and (max-width: ${mobileSize}px)`,
    md: `screen and (max-width: ${tabletSize}px)`,
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1420px)',
  },
}
