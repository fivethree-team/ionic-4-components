export interface IFivGoogleMaps {
    zoom: number;
    addMarker(lat: number, lng: number);
    hideMarkers();
    showMarkers();
    deleteMarker(position: LatLng);
    deleteMarkers();
}

export interface LatLng {
    lat: number;
    lng: number;
}
