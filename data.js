
const sarajevo = {
    center: {
        lat: 43.8494533,
        lng: 18.3847805
    },
    locations: [
        {   
            id: 9,
            name: 'Sarajevo Auto 1',
            position: {
                lat: 43.8494533,
                lng: 18.3847805
            }
        },
        {   
            id: 98,
            name: 'Sarajevo Auto 2',
            position: {
                lat: 43.8483627,
                lng: 18.3767581
            }
        },
        {   
            id: 14,
            name: 'Sarajevo Auto 3',
            position: {
                lat: 43.8483838,
                lng: 18.3763943
            }
        }
    ]
}

const mostar = {
    center: {
        lat: 43.350277, 
        lng: 17.812435
    },
    locations: [
        {   
            id: 5,
            name: 'Mostar Auto 1',
            position: {
                lat: 43.3502809,
                lng: 17.8102463
            }
        },
        {   id: 43,
            name: 'Mostar Auto 2',
            position: {
                lat: 43.3584019,
                lng: 17.8109833
            }
        }
    ]
}

const newyork = {
    center: {
        lat: 40.7591704,
        lng: -74.0392715
    },
    locations: [
        {   
            id: 1,
            name: 'New York Auto 1',
            position: {
                lat: 40.7591704,
                lng: -74.0392715
            }
        },
        {   
            id: 2,
            name: 'New York Auto 2',
            position: {
                lat: 40.758837,
                lng: -74.041117
            }
        }
    ]
}

module.exports = [
        {
            name: 'Sarajevo',
            data: sarajevo
        },
        {
            name: 'Mostar',
            data: mostar
        },
        {
            name: 'New York',
            data: newyork
        }
    ]
