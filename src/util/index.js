export function getPlaceNames(response){
    return response.map(place => place.name)
}