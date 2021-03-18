import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import StormLocationMarker from './StormLocationMarker';
import VolcanoLocationMarker from './VolcanoLocationMarker';
import LocationBoxInfo from './LocationBoxInfo';

// npm install --save-dev @iconify/react @iconify-icons/wi



const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return (
                    <LocationMarker key={ev.id}
                    lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title})} />
            );
        }
        if(ev.categories[0].id === 10){
             return (
                <StormLocationMarker key={ev.id}
                    lat={ev.geometries[0].coordinates[1]} 
                    lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
            );
                
        }
        
        return null;
    })
    return (
        <div className="map">
            <GoogleMapReact 
            bootstrapURLKeys={{key: 'AIzaSyB73PkJ_mvqg146tBZoxnQu6VOoRjmd99g'}}
            defaultCenter={ center }
            defaultZoom={ zoom }>
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationBoxInfo info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
