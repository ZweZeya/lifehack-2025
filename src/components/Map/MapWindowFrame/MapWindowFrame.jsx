import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

import WindowFrame from "../../common/WindowFrame/WindowFrame"
import "./MapWindowFrame.scss"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapWindowFrame = ({className}) => {
    const position = [1.294872, 103.7737049];
    const zoom = 20;
    const attributon = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    return (
        <WindowFrame className={`map ${className}`}>
            <div className="map-label">find us at:</div>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer attribution={attributon} url={url} />
                <Marker position={position}>
                    <Popup>
                        <a href="https://maps.app.goo.gl/akZNWJ7z3Jz9DYgA8">COM 3</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </WindowFrame>
    );
}

export default MapWindowFrame;