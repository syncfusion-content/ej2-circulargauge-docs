


import { CircularGauge, Gradient } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Gradient);
let pointerRadialGradient: Object = {
    radius: '50%',
    innerPosition: { x: '50%', y: '50%' },
    outerPosition: { x: '50%', y: '50%' },
    colorStop: [
        { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
        { color: '#E63B86', offset: '60%', opacity: 0.9 }
    ]
};
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        startAngle: 270,
        endAngle: 90,
        lineStyle: { width: 3, color: '#E63B86' },
        labelStyle: {
            font: { size: '0px'}
        }, majorTicks: {
            height: 0
        }, minorTicks: {
            height: 0
        },
        radius: '90%',
        minimum: 0,
        maximum: 100,
        pointers: [{
            radius: '80%',
            value: 80,
            animation: { enable: true, duration: 1000 },
            pointerWidth: 10,
            radialGradient: pointerRadialGradient,
            cap: {
                radius: 8,
                color: 'white',
                border: {
                    color: '#E63B86',
                    width: 1
                }
            },
            needleTail: {
                length: '20%',
                radialGradient: pointerRadialGradient,
            }
        }, {
            radius: '60%', value: 40,
            animation: { duration: 1000 },
            pointerWidth: 10,
            radialGradient: pointerRadialGradient,
            cap: {
                radius: 8, color: 'white',
                border: { color: '#E63B86', width: 1 }
            },
            needleTail: {
                length: '20%',
                radialGradient: pointerRadialGradient
            }
        }]
     }]
}, '#element');



