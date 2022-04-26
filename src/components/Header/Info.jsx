import InfoBox from './InfoBox';

const Info = props => {
   return (
      <div className="header__info">
         <InfoBox title="Ip Address" info={props.ip} />
         <InfoBox title="Location" info={`${props.country}, ${props.city}`} />
         <InfoBox title="Timezone" info={props.timezone} />
         <InfoBox title="Isp" info={props.isp} />
      </div>
   );
};

export default Info;
