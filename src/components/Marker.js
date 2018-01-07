import React from 'react'

export default class Marker extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            marker: null
        }
    }

    componentDidMount(){
        this.renderMarker()
    }

    componentDidUpdate(prevProps){
        if(this.props.map !== prevProps.map){
            this.renderMarker()
        }
    }

    renderMarker(){
        
        const { map, maps, data, onMarkerClick, id } = this.props
        const latLng = new maps.LatLng(data.position.lat, data.position.lng)

        const pref = {
            map: this.props.map,
            position: latLng
        }

        const marker = new maps.Marker(pref)
        marker.addListener('click', () => {
            onMarkerClick(marker, id)
        })

        this.setState({ marker })
    }

    render(){
        return null
    }
}