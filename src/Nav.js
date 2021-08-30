import './Nav.css';

const Nav = (props) => {
  return (
    <header className="navigation-bar">
      <h1>RANCID TOMATILLOS</h1>
      <label for="searchBar"><strong>SEARCH MOVIES </strong></label>
      <input type="search" placeholder="type here" id="searchBar" name="search-bar" />
    </header>
  )
}

export default Nav