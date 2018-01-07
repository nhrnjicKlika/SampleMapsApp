import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import Marker from './Marker'
import InfoWindow from './InfoWindow'
import { setSelectedMarker, setLocationId } from '../actions'

function mapStateToProps(state){

    return {
        data: state.places.find(place => place.name === state.selectedPlace).data,
        selectedPlace: state.selectedPlace,
        marker: state.marker,
        locationId: state.locationId
    }
}

function mapDispatchToProps(dispatch){
    return{
        setMarker: (marker) => {
            dispatch(setSelectedMarker(marker))
        },

        setLocationId: (id) => {
            dispatch(setLocationId(id))
        }
    }
}

class Map extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            map: null,
            mounted: false
        }
    }

    componentDidMount(){

        const node = ReactDOM.findDOMNode(this.refs.map)
        const maps = this.props.google.maps
        const { data } = this.props
        const center = new maps.LatLng(data.center.lat, data.center.lng)
        
        const mapConfig = {
            center,
            zoom: 14
        }

        const map = new maps.Map(node, mapConfig)
        this.setState({ map })
        this.setState({ mounted: true })
    }

    componentDidUpdate(prevProps){
        
        if(prevProps.selectedPlace !== this.props.selectedPlace){
            const maps = this.props.google.maps
            const { data } = this.props
            const center = new maps.LatLng(data.center.lat, data.center.lng)
            this.state.map.setCenter(center)
        }

    }

    onMarkerClick = (marker, id) => {
    
        if(this.props.marker === marker){
            this.props.setMarker(null)
            this.props.setLocationId(0)
        }else{
            this.props.setMarker(marker)
            this.props.setLocationId(id)
        }
    }

    infoWindow(){

        const { locationId } = this.props
        const { locations } = this.props.data

        let location = locations.find(location => location.id === locationId)
        
        if(location){
            return(
                <InfoWindow 
                    maps = { this.props.google.maps }
                    map = { this.state.map }
                    locationInfo = { location.name }
                />
            )
        }else{
            return null
        }
    }

    render(){

        const style = {
            height: '100vh',
            width: '80%',
            float: 'right'
        }

        let { locations } = this.props.data

        let markers = locations.map((location) => {

            return (
                <Marker
                    id = { location.id }
                    key = { location.id }
                    maps = { this.props.google.maps }
                    data = { location }
                    map = { this.state.map }
                    onMarkerClick = { this.onMarkerClick }
                 />
            )
        })

        return (
            <div ref = 'map' style = { style }> 
                
                { markers }
                { this.infoWindow() }

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)