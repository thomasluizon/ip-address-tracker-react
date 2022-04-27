import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

const App = () => {
   const ipUrl = 'http://ip-api.com/json/';
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
         await fetch(ipUrl)
            .then(res => res.json())
            .then(json => {
               update(json);
            });
      }
      fetchApi();
   }, []);

   const update = json => {
      setIp(json.query);
      setCity(json.regionName);
      setCountry(json.country);
      setTimezone(json.timezone);
      setIsp(json.isp);
      setLat(json.lat);
      setLong(json.lon);
      setLoading(false);
   };

   async function updateUi(Ip) {
      setLoading(true);
      await fetch(ipUrl + Ip)
         .then(res => res.json())
         .then(json => {
            update(json);
         });
   }

   function handleSubmit(e, inputValue) {
      e.preventDefault();
      updateUi(inputValue);
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
            <Map
               country={country || 'Invalid ip'}
               city={city || 'Invalid ip'}
               lat={lat || 'Invalid ip'}
               long={long || 'Invalid ip'}
               ipUrl={ipUrl || 'Invalid ip'}
            />
         )}
      </>
   );
};

export default App;
