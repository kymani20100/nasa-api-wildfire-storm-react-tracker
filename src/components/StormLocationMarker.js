import { Icon } from '@iconify/react';
import nightStormShowers from '@iconify-icons/wi/night-storm-showers';


const StormLocationMarker = ({ lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onclick}>
            <Icon icon={nightStormShowers} className="location-icon" />
        </div>
    )
}

export default StormLocationMarker
