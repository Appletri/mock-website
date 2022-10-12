import Account from './Account';
import MoreMenu from './MoreMenu';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import './style.css';
import TwitchIcon from './TwitchIcon';

function NavBar(props) {
  return (
    <div className={`NavBar ${props.theme}`}>
      <div className='left-side'>
        <TwitchIcon />
        <p className='browse-link'>Browse</p>
        <MoreMenu />
      </div>
      <SearchBar />
      <div className='right-side'>
        <Notifications />
        <button>Log in</button>
        <button className='sign-up'>Sign Up</button>
        <Account />
      </div>


    </div>
  )
}

export default NavBar;