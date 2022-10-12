import './style.css';
import icon from '../../assets/search_black_24dp.svg';

function SearchBar(props) {
  return (
    <div className='search-bar'>
    <input className='search-input'type='text' placeholder='Search'></input>
    <button className='search-submit' type='submit'>
      <img className='search-icon' src={icon} alt='search icon'/>
    </button>
  </div>
  )
}

export default SearchBar