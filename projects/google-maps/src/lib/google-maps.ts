export interface FivGoogleMaps {
    zoom: number;
    addMarker(lat: number, lng: number);
    hideMarkers();
    showMarkers();
    deleteMarker(lat: number, lng: number);
    deleteMarkers();
}
