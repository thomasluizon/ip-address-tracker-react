import Search from './Search';
import Info from './Info';

const Header = props => {
   return (
      <header className="header">
         <h1>IP Address Tracker</h1>
         <Search />
         <Info />
      </header>
   );
};

export default Header;
