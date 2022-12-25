import React from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [55.661638, 37.480148];

const ContactsMap = () => {
  return (
    <YMaps query={{ load: "package.full" }}>
      <Map
        state={{
          center,
          zoom:17.4,
          controls: []
        }}
        width='100%'
        height="32.2rem"
      >
        <Placemark
          geometry={center}
          options={
            {
              preset: 'islands#redIcon', // список темплейтов на сайте яндекса
            } }
        />
      </Map>
    </YMaps>
  );
};

export default ContactsMap;