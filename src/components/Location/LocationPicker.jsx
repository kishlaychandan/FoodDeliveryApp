import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 37.7749,  // Default latitude
  lng: -122.4194 // Default longitude
};

function LocationPicker({ onLocationSelect }) {
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const handleMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setSelectedLocation(newLocation);
    onLocationSelect(newLocation);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={10}
        onClick={handleMapClick}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationPicker;
