var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        pointers: [{
            value: 50,
            type: 'RangeBar',
            radius: '60%',
            color: '#007DD1',
            border: {
                color: 'grey',
                width: 2
            },
            pointerWidth: 15
        }]
    }]
}, '#element');

