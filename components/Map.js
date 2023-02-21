import React from 'react';
import ReactMapGL, { Marker, popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const coordinates = searchResults.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));
  // console.log(coordinates);
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/swathimahadevaiah/clee56yg6002p01ljspotcb3x"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
    </div>
  );
}

export default Map;
//npm i geolib
