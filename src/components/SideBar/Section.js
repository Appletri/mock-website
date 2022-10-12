import Channel from "./Channel";
import ChannelIcons from "./Channel";

function Section(props) {
  if (props.visible) {
    return(
      <section>
        <h4 className='side-bar-header'>{props.header}</h4>
        {!props.arr ? null : props.arr.map((channel) => {
          return <Channel />
        })}
      </section>
    )
  } else {
    return(
      <section>
        <img src={props.icon} alt={props.alt}></img>
        {!props.arr ? null : props.arr.map((channel) => {
          return <ChannelIcons />
        })}
      </section>
    )
  }
}

export default Section;