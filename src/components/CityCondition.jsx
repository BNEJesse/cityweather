import React from 'react';
import umbrella from '../images/icon-umberella.png';
import wind from '../images/icon-wind.png';
import compass from '../images/icon-compass.png';

const CityCondition = props => {
  const { data, unit } = props;
  return (
    <section class='weather-condition'>
      <div className='weather-condition__location'>{data.city}</div>
      <div style={{ 'text-align': 'center', 'font-size': '14px' }}>
        {data.weather}
      </div>
      <div className='weather-condition__temp'>
        {data.temp[unit]} {unit}
      </div>
      <div className='weather-condition__desc'>
        <div>
          <img src={umbrella} />
          <span className='citem'>{`${data.humidity}%`}</span>
        </div>
        <div>
          <img src={wind} />
          <span className='citem'>{`${data.windSpeed} km/h`}</span>
        </div>
        <div>
          <img src={compass} />
          <span className='citem'>{data.windDirection}</span>
        </div>
      </div>
    </section>
  );
};

export default CityCondition;
