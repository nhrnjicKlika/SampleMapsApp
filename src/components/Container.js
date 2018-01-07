import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import cache from '../util/ScriptCache'
import GoogleApi from '../util/GoogleApi'
import Map from './Map'
import Picker from './Picker'
import { setPlaces } from '../actions'

function mapDispatchToProps(dispatch){
    return {
        setPlaces: (places) => {
            dispatch(setPlaces(places))
        }
    }
}

class Container extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            scriptLoaded: false,
            google: null,
            placesLoaded: false
        }
    }

    componentWillMount(){

        axios.get('http://localhost:3001/api/places')
            .then((response) => {
                this.props.setPlaces(response.data)
                this.setState({ placesLoaded: true })
            }).catch((err) => {
                console.log(err)
                // handle error
            })
    
       const scriptCache = cache({
            google: GoogleApi({
                apiKey: 'AIzaSyAgQpOl8W7LJkvIgnoHM6KrvCM-oXbfV-M',
                libraries: ['places']
            })
        })

        scriptCache.google.onLoad(() => {
            this.setState({
                scriptLoaded: true,
                google: window.google
            })
        })
    }

    render(){
        const map = (this.state.scriptLoaded && this.state.placesLoaded) ? <Map google = { this.state.google } /> : null
        return (
            <div> 
                <Picker />
                { map } 
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Container)