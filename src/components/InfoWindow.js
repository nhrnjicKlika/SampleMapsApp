import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state){

    return {
        selectedMarker: state.marker
    }
}

class InfoWindow extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            map: null,
            infoWindow: null
        }
    }

    componentDidMount(){
        this.renderInfoWindow()
    }

    componentDidUpdate(prevProps){
        this.renderInfoWindow()
    }

    componentWillUnmount(){
        this.closeInfoWindow()
    }

    renderInfoWindow(){

        const { map, selectedMarker, maps, locationInfo } = this.props

        console.log('info',locationInfo)

        this.closeInfoWindow()
        this.infoWindow = new maps.InfoWindow({
            content: locationInfo
        })
        
        this.infoWindow.open(map, selectedMarker)
    }

    closeInfoWindow(){
        if(this.infoWindow)
            this.infoWindow.close()
    }

    render(){
        return null
    }
}

export default connect(mapStateToProps)(InfoWindow)