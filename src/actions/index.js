export function setLocations(locations){
    return{
        type: 'SET_LOCATIONS',
        locations
    }
}

export function setSelectedMarker(marker){
    return{
        type: 'SET_SELECTED_MARKER',
        marker
    }
}

export function setLocationId(id){
    return{
        type: 'SET_LOCATION_ID',
        id
    }
}

export function setPlaces(places){
    return{
        type: 'SET_PLACES',
        places
    }
}

export function setPlace(selectedPlace){
    return{
        type: 'SET_PLACE',
        selectedPlace
    }
}


