import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/emojione/volcano';



const VolcanoLocationMarker = ({ lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onclick}>
            <Icon icon={volcanoIcon} className="location-icon" />
        </div>
    )
}

export default VolcanoLocationMarker

