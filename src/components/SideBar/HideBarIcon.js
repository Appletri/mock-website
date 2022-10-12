import './style.css';

function HideBarIcon(props) {
  if (props.visible) {
    return (
      <div onClick={props.click} className='more-icon side-bar-icon'>
        <svg fill='var(--font-color)' width="65%" height="65%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
          <g> 
            <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
          </g>
        </svg>
      </div>
    )
  } else {
    return (
      <div onClick={props.click} className='more-icon side-bar-icon'>
        <svg fill='var(--font-color)' width="65%" height="65%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" >
          <g> 
            <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
          </g>
        </svg>
      </div>
    )
  }
  
}

export default HideBarIcon;