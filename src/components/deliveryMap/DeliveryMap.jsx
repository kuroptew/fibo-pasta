import React from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [47.2258, 39.689];

const DeliveryMap = () => {
  return (
    <YMaps query={{ load: "package.full" }}>
      <Map
        state={{
          center,
          zoom:17,
          controls: []
        }}
        width='100%'
        height="32.2rem"
      >
      </Map>
    </YMaps>
  );
};

export default DeliveryMap;