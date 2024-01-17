import { isMobile } from 'react-device-detect';
import './App.css';
import BlockContentOne from './scripts/BlockContentOne';
import BlockContentSecond from './scripts/BlockContentSecond';
import DesignVariantsBlock from './scripts/BlockDesignVariants';
import FooterBlock from './scripts/BlockFooter';
import HeaderBlock from './scripts/BlockHeader';
import HeaderMenu from './scripts/HeaderContainer';
import './styles/headStyle.css';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <HeaderBlock />
      <BlockContentOne />
      <BlockContentSecond />
      <DesignVariantsBlock />
      <FooterBlock />
    </div>
  );
}

export default App;
