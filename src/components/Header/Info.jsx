import InfoBox from './InfoBox';

const Info = () => {
   return (
      <div className="header__info">
         <InfoBox title="Ip Address" />
         <InfoBox title="Location" />
         <InfoBox title="Timezone" />
         <InfoBox title="Isp" />
      </div>
   );
};

export default Info;
