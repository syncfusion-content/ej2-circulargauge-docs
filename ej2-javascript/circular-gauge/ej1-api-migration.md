---
layout: post
title: Ej1 api migration in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Ej1 api migration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in ##Platform_Name## Circular gauge control

This article describes the API migration process of Accordion component from Essential JS 1 to Essential JS 2.

## Circular gauge dimensions

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Height| **Property:** *height*<br/><br/> $("#container").ejCircularGauge({ height: 400 });|**Property:** *height*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; height : '350px' <br/> }); <br/> gauge.appendTo('#container');|
|Width| **Property:** *width*<br/><br/> $("#container").ejCircularGauge({ width: 100 });|**Property:** *width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; width : '150px' <br/> }); <br/> gauge.appendTo('#container');|
|Height(In Percentage)| Not Applicable|**Property:** *height*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; height : '50%' <br/> }); <br/> gauge.appendTo('#container');|
|Width(In Percentage)| Not Applicable|**Property:** *width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; width : '80%' <br/> }); <br/> gauge.appendTo('#container');|

## Axis Line

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Axisline Width| **Property:** *scales.size*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; showScaleBar: true, size: 6 <br/> &nbsp; }] });|**Property:** *axes.lineStyle.width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ lineStyle: { width: 4 } }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline Color| **Property:** *scales.size*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; showScaleBar: true, backgroundColor: "red" <br/> &nbsp; }] });|**Property:** *axes.lineStyle.width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ lineStyle: { color: 'red' } }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline BackgroundColor| Not Applicable|**Property:** *axes.background*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ background: 'red' }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline Direction| **Property:** *scales.direction*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; direction: "counterclockwise" <br/> &nbsp; }] });|**Property:** *axes.direction*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ direction: 'AntiClockWise' }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline Radius| **Property:** *scales.radius*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; showScaleBar: true, radius: 150 <br/> &nbsp; }] });|**Property:** *axes.radius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ radius: '150' }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline Startangle| **Property:** *scales.startAngle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; startAngle: 80 <br/> &nbsp; }] });|**Property:** *axes.startAngle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ startAngle: 200 }] <br/> }); <br/> gauge.appendTo('#container');|
|Axisline Endangle| **Property:** *scales.sweepAngle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; sweepAngle: 250 <br/> &nbsp; }] });|**Property:** *axes.endAngle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ endAngle: 150 }] <br/> }); <br/> gauge.appendTo('#container');|
|Minimum Axisvalue| **Property:** *scales.minimum*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; minimum: 20 <br/> &nbsp; }] });|**Property:** *axes.minimum*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ minimum: 20 }] <br/> }); <br/> gauge.appendTo('#container');|
|Maximum Axisvalue| **Property:** *scales.maximum*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; maximum: 200 <br/> &nbsp; }] });|**Property:** *axes.maximum*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ maximum: 200 }] <br/> }); <br/> gauge.appendTo('#container');|

## Ticks

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Type of Ticks| **Property:** *scales.ticks.type*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: "major" }] <br/> &nbsp; }] });| **Property:** *axes.majorTicks*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: {  } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Height of Major Ticks| **Property:** *scales.ticks.height*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ height: 12 }] <br/> &nbsp; }] });| **Property:** *axes.majorTicks.height*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: { height: 12 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Width of Major Ticks| **Property:** *scales.ticks.width*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ width: 3 }] <br/> &nbsp; }] });| **Property:** *axes.majorTicks.width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: { width: 3 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Color of Major Ticks| **Property:** *scales.ticks.color*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ color: "#777777" }] <br/> &nbsp; }] });| **Property:** *axes.majorTicks.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: { color: "#777777" } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Offset of Major Ticks| **Property:** *scales.ticks.distanceFromScale*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ distanceFromScale: 10 }] <br/> &nbsp; }] });| **Property:** *axes.majorTicks.offset*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: { offset: 10 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Angle of Major Ticks| **Property:** *scales.ticks.angle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ angle: 10 }] <br/> &nbsp; }] });| Not Applicable|
|Interval of Major Ticks| **Property:** *scales.majorIntervalValue*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; majorIntervalValue: 10 <br/> &nbsp; }] });| **Property:** *axes.majorTicks.interval*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; majorTicks: { interval: 10 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Height of Minor Ticks| **Property:** *scales.ticks.height*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor', height: 12 }] <br/> &nbsp; }] });| **Property:** *axes.minorTicks.height*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; minorTicks: { height: 12 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Width of Minor Ticks| **Property:** *scales.ticks.width*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor', width: 3 }] <br/> &nbsp; }] });| **Property:** *axes.minorTicks.width*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; minorTicks: { width: 3 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Color of Minor Ticks| **Property:** *scales.ticks.color*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor', color: "#777777" }] <br/> &nbsp; }] });| **Property:** *axes.minorTicks.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; minorTicks: { color: "#777777" } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Offset of Minor Ticks| **Property:** *scales.ticks.distanceFromScale*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor', distanceFromScale: 10 }] <br/> &nbsp; }] });| **Property:** *axes.minorTicks.offset*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; minorTicks: { offset: 10 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Angle of Major Ticks| **Property:** *scales.ticks.angle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor', angle: 10 }] <br/> &nbsp; }] });| Not Applicable|
|Interval of Minor Ticks| **Property:** *scales.majorIntervalValue*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; ticks: [{ type: 'minor' }], majorIntervalValue: 10 <br/> &nbsp; }] });| **Property:** *axes.minorTicks.interval*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; minorTicks: { interval: 10 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Labels

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Autoangle| **Property:** *scales.labels.autoAngle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ showLabels: true, autoAngle: true }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.autoAngle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { autoAngle: true } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Angle| **Property:** *scales.labels.angle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ showLabels: true, angle: 30 }] <br/> &nbsp; }] });| Not Applicable|
|Offset| **Property:** *scales.labels.distanceFromScales*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ showLabels: true, distanceFromScales: 10 }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.offset*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { offset: 5 } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Format| **Property:** *scales.labels.unitText*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ unitText: "kmph", unitTextPosition: "front" }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.format*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { format: "kmph" } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|UnitText Position| **Property:** *scales.labels.placement*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ showLabels: true, placement: "near" }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.position*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { position: "Outside" } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Label Range Color| Not Applicable| **Property:** *axes.labelStyle.useRangeColor*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { useRangeColor: true } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|LabelText Color| **Property:** *scales.labels.color*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ color: "red" }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.font.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { color: "red" } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Opacity| **Property:** *scales.labels.opacity*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ opacity: 0.3 }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.font.opacity*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { opacity: 0.5 } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Label Font Family| **Property:** *scales.labels.font.fontFamily*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ font: { fontFamily: "Arial" } }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.font.fontFamily*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { fontFamily: 'Roboto' } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Label Font Style| **Property:** *scales.labels.font.fontStyle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ font: { fontStyle: "Bold" } }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.font.fontStyle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { fontStyle: 'Bold' } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Label Font Size| **Property:** *scales.labels.font.size*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales: [{ <br/> &nbsp; &nbsp; labels: [{ font: { size: "12px" } }] <br/> &nbsp; }] });| **Property:** *axes.labelStyle.font.size*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { size: '12px' } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Label Font Weight| Not Applicable| **Property:** *axes.labelStyle.font.fontWeight*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; labelStyle: { font: { fontWeight: 'Regular' } } <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Ranges

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Start Value| **Property:** *scales.ranges.startValue*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true , startValue: 20 }] <br/> &nbsp; }] });| **Property:** *axes.ranges.start*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ start: 20 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|End Value| **Property:** *scales.ranges.endValue*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true , endValue: 30 }] <br/> &nbsp; }] });| **Property:** *axes.ranges.end*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ end: 30 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Start Width| **Property:** *scales.ranges.startWidth*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true , startWidth: 10 }] <br/> &nbsp; }] });| **Property:** *axes.ranges.startWidth*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ startWidth: 10 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|End Width| **Property:** *scales.ranges.endWidth*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true, endWidth: 10 }] <br/> &nbsp; }] });| **Property:** *axes.ranges.endWidth*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ endWidth: 10 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Color| **Property:** *scales.ranges.backgroundColor*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true, backgroundColor: "red" }] <br/> &nbsp; }] });| **Property:** *axes.ranges.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ color: "red" }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Offset| **Property:** *scales.ranges.distanceFromScale*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true , distanceFromScale: 10 }] <br/> &nbsp; }] });| Not Applicable|
|Placement| **Property:** *scales.ranges.placement*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true, placement: "center" }] <br/> &nbsp; }] });| Not Applicable|
|Opacity| **Property:** *scales.ranges.opacity*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ showRanges: true, opacity: 0.5 }] <br/> &nbsp; }] });|Not Applicable|
|Radius| Not Applicable| **Property:** *axes.ranges.radius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ radius: '80' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Rounded Corner Radius| Not Applicable| **Property:** *axes.ranges.roundedCornerRadius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; ranges: [{ roundedCornerRadius: 10 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Gradients| **Property:** *scales.ranges.gradients*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ <br/> &nbsp; &nbsp; &nbsp; showRanges: true, <br/> &nbsp; &nbsp; &nbsp; gradients: { colorInfo: [{ colorStop : 0, color:"#FFFFFF" }] } }] <br/> &nbsp; }] });|Not Applicable|
|Border| **Property:** *scales.ranges.border*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; ranges: [{ <br/> &nbsp; &nbsp; &nbsp; showRanges: true, <br/> &nbsp; &nbsp; &nbsp; border: { color: "blue", width: 2 } }] <br/> &nbsp; }] });| Not Applicable|

## Needle Pointer

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Needle Pointer| **Property:** *scales.pointers.type*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'needle' }] <br/> &nbsp; }] });| **Property:** *axes.pointers.type*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'needle', value: 20 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Needle Pointer Color| **Property:** *scales.pointers.backgroundColor*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ backgroundColor: 'red' }] <br/> &nbsp; }] });| **Property:** *axes.pointers.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ color: 'red' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Animation| **Property:** *enableAnimation*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; enableAnimation: true <br/> });| **Property:** *axes.pointers.animation*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ animation: true, duration: 1000 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Pointer Width| **Property:** *scales.pointers.width*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ width: 5 }] <br/> &nbsp; }] });| **Property:** *axes.pointers.pointerWidth*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ pointerWidth: 5 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Pointer Radius|**Property:** *scales.pointers.distanceFromScale*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ distanceFromScale: 10 }] <br/> &nbsp; }] });| **Property:** *axes.pointers.radius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ radius: 80 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Opacity| **Property:** *scales.pointers.opacity*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ opacity: 0.5 }] <br/> &nbsp; }] });| Not Applicable|
|Needle Type| **Property:** *scales.pointers.needleType*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ needleType: "triangle" }] <br/> &nbsp; }] });| Not Applicable|
|Back Needle Length| **Property:** *scales.pointers.backNeedleLength*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ showBackNeedle: true, backNeedleLength: 3 }] <br/> &nbsp; }] });| **Property:** *axes.pointers.needleTail.length*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ needleTail: { length: 5 } }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Marker Pointer

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Marker Pointer| **Property:** *scales.pointers.type*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker' }] <br/> &nbsp; }] });| **Property:** *axes.pointers.type*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', value: 20 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Marker Type| **Property:** *scales.pointers.markerType*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', markerType: "rectangle" }] <br/> &nbsp; }] });| **Property:** *axes.pointers.markerShape*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', markerShape: 'Diamond' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Marker Width| **Property:** *scales.pointers.width*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', width: 20 }] <br/> &nbsp; }] });| **Property:** *axes.pointers.markerWidth*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', markerWidth: 20 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Marker Height| **Property:** *scales.pointers.length*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', length: 25 }] <br/> &nbsp; }] });| **Property:** *axes.pointers.markerHeight*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', markerHeight: 25 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Marker Image| **Property:** *scales.pointers.imageUrl*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', imageUrl: "football.png" }] <br/> &nbsp; }] });| **Property:** *axes.pointers.imageUrl*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'marker', imageUrl: "football.png" }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Border Customization| **Property:** *scales.pointers.border*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; pointers: [{ <br/> &nbsp; &nbsp; &nbsp; type: 'marker', <br/> &nbsp; &nbsp; &nbsp; border: { color: 'red', width: 2 } }] <br/> &nbsp; }] });| **Property:** *axes.pointers.border*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ <br/> &nbsp; &nbsp; &nbsp; type: 'marker', <br/> &nbsp; &nbsp; &nbsp; border: { color: 'red', width: 2 } }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Rangebar Pointer

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Rangebar| Not Applicable| **Property:** *axes.pointers.type*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'RangeBar' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Rounded Corner Radius| Not Applicable| **Property:** *axes.pointers.roundedCornerRadius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; pointers: [{ type: 'RangeBar', roundedCornerRadius: 10 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Annotations

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Content| **Property:** *scales.customLabels.value*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ value: 'Lineargauge' }] <br/> &nbsp; }] });| **Property:** *axes.annotations.content*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ content: 'Annotation' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Angle| **Property:** *scales.customLabels.textAngle*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ textAngle: 90 }] <br/> &nbsp; }] });| **Property:** *axes.annotations.angle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ angle: 90 }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Font Family| **Property:** *scales.customLabels.font.fontFamily*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ font: { fontFamily: "Arial" } }] <br/> &nbsp; }] });| **Property:** *axes.annotations.textStyle.fontFamily*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ textStyle: { fontFamily: "Arial" } }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Font Color| **Property:** *scales.customLabels.color*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ color : "red" }] <br/> &nbsp; }] });| **Property:** *axes.annotations.textStyle.color*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ textStyle: { color: "red" } }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Auto Angle| Not Applicable| **Property:** *axes.annotations.autoAngle*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ autoAngle : true }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Radius| Not Applicable| **Property:** *axes.annotations.radius*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ radius : "10%" }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|
|Annotation Position| **Property:** *scales.customLabels.position*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ position : { x: 10, y: 10 } }] <br/> &nbsp; }] });| Not Applicable|
|Annotation Position Type| **Property:** *scales.customLabels.positionType*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; scales:[{ <br/> &nbsp; &nbsp; customLabels: [{ positionType : "outer" }] <br/> &nbsp; }] });| Not Applicable|
|ZIndex| Not Applicable| **Property:** *axes.annotations.zIndex*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; axes: [{ <br/> &nbsp; &nbsp; annotations: [{ zIndex : '1' }] <br/> &nbsp; }] }); <br/> gauge.appendTo('#container');|

## Appearance

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Title| Not Applicable| **Property:** *title*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; title: 'Circular Gauge' <br/> }); <br/> gauge.appendTo('#container');|
|Background Color| **Property:** *backgroundColor*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; backgroundColor : "red" <br/> });| **Property:** *background*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; background : "red" </br> }); <br/> gauge.appendTo('#container');|
|Localization| **Property:** *locale*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; locale : "en-US" <br/> });| **Property:** *locale*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; locale : "en-US" </br> }); <br/> gauge.appendTo('#container');|
|Border| Not Applicable| **Property:** *border*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; border : { color: "red" , width: 2 } </br> }); <br/> gauge.appendTo('#container');|
|Center of X| Not Applicable| **Property:** *centerX*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; centerX : "120px" </br> }); <br/> gauge.appendTo('#container');|
|Center of Y| Not Applicable| **Property:** *centerY*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; centerY : "150px" </br> }); <br/> gauge.appendTo('#container');|
|Theme| **Property:** *theme*<br/><br/> $("#container").ejCircularGauge({ <br/> &nbsp; theme : "flatlight" <br/> });| **Property:** *theme*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; theme : "Material" </br> }); <br/> gauge.appendTo('#container');|
|Margin| Not Applicable| **Property:** *margin*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/> &nbsp; margin: { left: 40, right: 40, top: 40, bottom: 40 } </br> }); <br/> gauge.appendTo('#container');|

## Events

| **Behavior** | **API in Essential JS 1** | **API in Essential JS 2** |
| --- | --- | --- |
|Annotation Event| **Event:** *drawCustomLabel*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; drawCustomLabel: function (args) {} <br/> });| **Event:** *annotationRender*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; annotationRender: function(e: IAnnotationRenderEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Label Event| **Event:** *drawLabels*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; drawLabels: function (args) {} <br/> });| **Event:** *axisLabelRender*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; axisLabelRender: function(e: IAxisLabelRenderEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Load Event| **Event:** *load*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; load: function (args) {} <br/> });| **Event:** *load*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; load: function(e: ILoadedEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Loaded Event| **Event:** *loaded*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; loaded: function (args) {} <br/> });| **Event:** *loaded*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; loaded: function(e: ILoadedEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Tooltip Rendered Event| Not Applicable| **Event:** *tooltipRender*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; tooltipRender: function(e: ITooltipRenderEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Resized Rendered Event| Not Applicable| **Event:** *resized*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; tooltipRender: function(e: IResizeEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Animation Event| Not Applicable| **Event:** *animationComplete*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; animationComplete: function(e: IAnimationCompleteEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Mousedown Event| **Event:** *mouseClick*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; mouseClick: function (args) {} <br/> });| **Event:** *gaugeMouseDown*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; gaugeMouseDown: function(e: IMouseEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Mousemove Event| **Event:** *mouseClickMove*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; mouseClickMove: function (args) {} <br/> });| **Event:** *gaugeMouseLeave*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; gaugeMouseLeave: function(e: IMouseEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Mouseup Event| **Event:** *mouseClickUp*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; mouseClickUp: function (args) {} <br/> });| **Event:** *gaugeMouseUp*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; gaugeMouseUp: function(e: IMouseEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Pointerdrag Move Event| **Event:** *drawPointers*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; drawPointers: function (args) {} <br/> });| **Event:** *dragMove*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; dragMove: function(e: IMouseEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Draw Range Event| **Event:** *drawRange*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; drawRange: function (args) {} <br/> });| Not Applicable|
|Draw Ticks Event| **Event:** *drawTicks*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; drawTicks: function (args) {} <br/> });| Not Applicable|
|Legend Render Event| **Event:** *legendItemRender*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; legendItemRender: function (args) {} <br/> });| Not Applicable|
|Animation Complete Event| Not Applicable| **Event:** *animationComplete*<br/><br/> let gauge: CircularGauge = new CircularGauge({ <br/>&nbsp; animationComplete: function(e: IAnimationCompleteEventArgs): void { }  <br/> }); <br/> gauge.appendTo('#container');|
|Right Click Event| **Event:** *rightClick*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; rightClick: function (args) {} <br/> });| Not Applicable|
|Double Click Event| **Event:** *doubleClick*<br/><br/> $("#container").ejCircularGauge({<br/>&nbsp; doubleClick: function (args) {} <br/> });| Not Applicable|