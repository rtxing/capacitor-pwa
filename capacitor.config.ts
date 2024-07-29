import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.conference.app',
  appName: 'ionic-conference-app',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
  server: {
    url: 'http://127.0.0.1:8000',        
    allowNavigation:[
      '127.0.0.1:8000',
      '*.your-domain.com/*',
      'localhost:8100/*'
    ]
  }
};

export default config;
