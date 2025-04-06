import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import WindowFrame from "../../common/WindowFrame/WindowFrame"
import "./MapWindowFrame.scss"
import Header from "../../common/Header/Header";

const MapWindowFrame = () => {
    const position = [1.294872, 103.7737049];
    const zoom = 20;
    const attributon = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    return (
        <WindowFrame className="map">
            <Header className="map-header">Venue</Header>
            <MapContainer center={position} zoom={zoom}>
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