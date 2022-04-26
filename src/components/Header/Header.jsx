import { useEffect, useState } from 'react';
import Search from './Search';
import Info from './Info';

const Header = props => {
   const [ipUrl, setIpUrl] = useState('http://ip-api.com/json');
   const [ip, setIp] = useState('');
   const [city, setCity] = useState('');
   const [country, setCountry] = useState('');
   const [timezone, setTimezone] = useState('');
   const [isp, setIsp] = useState('');
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function fetchApi() {
         const response = await fetch(ipUrl);
         const json = await response.json();
         setIp(json.query);
         setCity(json.regionName);
         setCountry(json.country);
         setTimezone(json.timezone);
         setIsp(json.isp);
         setLoading(false);
      }

      fetchApi();
   }, [ipUrl]);

   function handleSubmit(e, inputValue) {
      e.preventDefault();
      setIpUrl(`http://ip-api.com/json/${inputValue}`);
   }

   return (
      <header className="header">
         <h1>IP Address Tracker</h1>
         <Search handleSubmit={handleSubmit} />
         <Info
            ip={loading ? 'loading...' : ip}
            city={loading ? 'loading...' : city}
            country={country}
            timezone={loading ? 'loading...' : timezone}
            isp={loading ? 'loading...' : isp}
         />
      </header>
   );
};

export default Header;
