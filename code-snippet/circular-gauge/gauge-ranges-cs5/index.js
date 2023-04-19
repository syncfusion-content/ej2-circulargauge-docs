var circulargauge = new ej.circulargauge.CircularGauge({
axes: [{
        minimum: 0,
        maximum: 100,
        majorTicks: {
            useRangeColor: true
        },
        minorTicks: {
            useRangeColor: true
        },
        labelStyle: {
            useRangeColor: true
        },
        ranges: [{
            start: 0,
            end: 25,
            radius: '108%'
        },{
            start: 25,
            end: 50,
            radius: '70%'
        },{
            start: 50,
            end: 75,
            radius: '70%'
        },{
            start: 75,
            end: 100,
            radius: '108%'
        }]
    }]
}, '#element');

