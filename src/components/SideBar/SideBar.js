import { useEffect, useState } from 'react';
import HideBarIcon from './HideBarIcon';
import Section from './Section';
import './style.css';

function SideBar(props) {
  const [fol, setFol] = useState(null);
  const [rec, setRec] = useState(null);
  const [otherViews, setOtherViews] = useState(null);
  const [curChan, setCurChan] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <div className={visible ? 'side-bar' : 'side-bar hidden'}>
      <HideBarIcon visible={visible} click={handleClick}/>
      <Section visible={visible} arr={fol} header='Followed Channels' />
      <Section visible={visible} arr={rec} header='Recommended Channels' />
      <Section visible={visible} arr={otherViews} header={`${curChan} Viewers Also Watch`} />
    </div>
  )
}

export default SideBar;