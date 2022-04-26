import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = props => {
   return (
      <MapContainer
         center={[props.lat, props.long]}
         zoom={13}
         scrollWheelZoom={true}
      >
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={[props.lat, props.long]}>
            <Popup>
               {props.country}, {props.city}
            </Popup>
         </Marker>
      </MapContainer>
   );
};

export default Map;
