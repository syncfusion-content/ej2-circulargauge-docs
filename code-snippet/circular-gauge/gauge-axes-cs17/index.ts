


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        majorTicks: {
            interval: 10,
            position: 'Inside',
            height: 10,
        },
        pointers: [],
        minorTicks: {
            interval: 5,
            position: 'Inside',
            height: 5,
        }
    }, {
        pointers: [],
        majorTicks: {
            interval: 10,
            position: 'Inside',
            height: 10,
            color: '#27d5ff'
        },
        minorTicks: {
            interval: 5,
            position: 'Inside',
            height: 5,
            color: '#27d5ff'
        }
    }]
}, '#element');



