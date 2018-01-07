import React from 'react'
import { connect } from 'react-redux'
import { getPlaceNames } from '../util'
import { setPlace } from '../actions'

function mapStateToProps(state){
    return{ 
        places: getPlaceNames(state.places),
        selectedPlace: state.selectedPlace
    }
}

function mapDispatchToProps(dispatch){
    return{
        setPlace: (place) => {
            dispatch(setPlace(place))
        }
    }
}

class Picker extends React.Component{

    handleListSelect = (e) => {
        this.props.setPlace(e.target.value)
    }

    render(){

        const style = {
            height: '100vh',
            width: '20%',
            float: 'left'
        }
        
        let places = this.props.places.map(place => {
            return (
                <option key = {place} value= { place } > { place } </option>
            )
        })

        return(
            <div style = { style }> 
                <h3> Pick a destination </h3>
                <select value = { this.props.selectedPlace } onChange = { this.handleListSelect }>
                    { places }
                </select>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker)