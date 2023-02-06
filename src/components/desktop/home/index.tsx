import Sidebar from '../sidebar';
import Topbar from '../topbar';

import Transfers from '../transfers';

import './style.css';

const Home = () => {
  return (
    <div id="layout">
      <Sidebar />
      <Topbar />
      <div id="content">
        <Transfers />
      </div>
    </div>
  );
};

export default Home;
