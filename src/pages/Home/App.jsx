import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

const App = () => {
   const [ipUrl, setIpUrl] = useState('http://ip-api.com/json');
   const [ip, setIp] = useState('');
   const [city, setCity] = useState('');
   const [country, setCountry] = useState('');
   const [timezone, setTimezone] = useState('');
   const [isp, setIsp] = useState('');
   const [loading, setLoading] = useState(true);
   const [lat, setLat] = useState();
   const [long, setLong] = useState();

   useEffect(() => {
      async function fetchApi() {
         const response = await fetch(ipUrl);
         const json = await response.json();
         setIp(json.query);
         setCity(json.regionName);
         setCountry(json.country);
         setTimezone(json.timezone);
         setIsp(json.isp);
         setLat(json.lat);
         setLong(json.lon);
         setLoading(false);
      }

      fetchApi();
   }, [ipUrl]);

   function handleSubmit(e, inputValue) {
      e.preventDefault();
      setIpUrl(`http://ip-api.com/json/${inputValue}`);
   }

   return (
      <>
         <Header
            handleSubmit={handleSubmit}
            loading={loading}
            ip={ip}
            city={city}
            country={country}
            timezone={timezone}
            isp={isp}
         />
         {loading ? null : (
            <Map country={country} city={city} lat={lat} long={long} />
         )}
      </>
   );
};

export default App;
