const defaultState = {
    places: [],
    marker: null,
    selectedMarkerId: 0,
    selectedPlace: 'Sarajevo'
}

export default (state = defaultState , action) => {
    switch(action.type){
        case 'SET_LOCATIONS': 
            return{
                ...state,
                locations: action.locations
            }

        case 'SET_SELECTED_MARKER':
            return{
                ...state,
                marker: action.marker
            }
        
        case 'SET_SELECTED_MARKER_ID':
            return{
                ...state,
                selectedMarkerId: action.id
            }

        case 'SET_PLACES':
            return{
                ...state,
                places: action.places
            }

        case 'SET_PLACE':
            return{
                ...state,
                selectedPlace: action.selectedPlace
            }
        
        case 'SET_LOCATION_ID': 
            return{
                ...state,
                locationId: action.id
            }

        default: 
            return state
    }
}



