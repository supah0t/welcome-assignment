//Declaration helper for vite svgr plugin
/// <reference types="vite-plugin-svgr/client" />
import { useState, useEffect } from 'react';

import './App.css';

import '../assets/fonts/OpenSans-Regular.ttf';

import DesktopHome from './components/desktop/home';
import MobileHome from './components/mobile/home';

import { useWindowResize } from './utils/useWindowResize';

function App() {
  const { width } = useWindowResize();
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    setMobileMode(width < 1100 ? true : false);
  }, [width]);

  //conditionally renders the appropriate application mode
  if (mobileMode) return <MobileHome />;
  return <DesktopHome />;
}

export default App;
