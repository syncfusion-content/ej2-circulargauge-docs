---
layout: post
title: Gauge Export in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about how to export the gauge in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Gauge Export 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gauge Export in ##Platform_Name## Circular gauge control

## How to export a Circular Gauge with Annotations using ForeignObject

The Circular Gauge component do not support exporting with annotations. This is because the annotations are intended to render any elements in the Circular Gauge component such as text, images, or custom elements. Since Circular Gauge is a SVG based control, the annotations can be rendered as **foreignObject** element. However, some web browsers do not support it.  As a workaround, we can achieve the same in the sample level.

The Circular Gauge with annotations can be exported in **PNG**, **JPEG**, and **PDF** formats. Similarly, the tooltip template can be exported as **foreignObject** elements. The example below demonstrates to export the Circular Gauge with annotations.

{% if page.publishingplatform == "typescript" %}

```
function gaugeExport(formatValue, fileName) {
  
  var annotationEle = document
    .getElementById('range-container')
    .querySelectorAll('[id*="range-container_Axis_0_Annotation_"]');
  for (var i = 0; i < annotationEle.length; i++) {
    var annotation = annotationEle[i];
    var foreign = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'foreignObject'
    );
    foreign.setAttribute(
      'width',
      annotation.getBoundingClientRect().width.toString()
    );
    foreign.setAttribute(
      'height',
      annotation.getBoundingClientRect().height.toString()
    );
    foreign.setAttribute('x', annotation.style.left);
    foreign.setAttribute('y', annotation.style.top);
    foreign.innerHTML = annotation.innerHTML;
    annotation.style.display = 'none';
    var svg = document.querySelector('#range-container_svg');
    svg.appendChild(foreign);
  }

  var svgData = new XMLSerializer().serializeToString(svg);
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var ctx = canvas.getContext('2d');
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      var imagedata = canvas.toDataURL('image/png');
      var anchor = document.createElement('a');
      anchor.download = fileName + '.' + formatValue;
      anchor.href = imagedata;
      document.body.appendChild(anchor);
      anchor.click();
    } else if (formatValue == 'PDF') {
      const document: PdfDocument = new PdfDocument();
      var imageString = canvas
        .toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream');
      imageString = imageString.slice(imageString.indexOf(',') + 1);
      document.pages
        .add()
        .graphics.drawImage(
          new PdfBitmap(imageString),
          0,
          0,
          canvas.width,
          canvas.height
        );
      if (circulargauge.allowPdfExport) {
        document.save(fileName + '.' + formatValue);
        document.destroy();
      }
    }
    canvas.remove();
  };
}

document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'Gauge';
  gaugeExport(formatValue, fileName);
};

```
> **Sample**: [Export the Circular Gauge with annotations](https://stackblitz.com/edit/bm1bqp-hfljtw?file=index.ts).

{% elsif page.publishingplatform == "javascript" %}

```
function gaugeExport(formatValue, fileName) {
  var annotationEle = document
    .getElementById('gauge')
    .querySelectorAll('[id*="gauge_Axis_0_Annotation_"]');
  for (var i = 0; i < annotationEle.length; i++) {
    var annotation = annotationEle[i];
    var foreign = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'foreignObject'
    );
    foreign.setAttribute(
      'width',
      annotation.getBoundingClientRect().width.toString()
    );
    foreign.setAttribute(
      'height',
      annotation.getBoundingClientRect().height.toString()
    );
    foreign.setAttribute('x', annotation.style.left);
    foreign.setAttribute('y', annotation.style.top);
    foreign.innerHTML = annotation.innerHTML;
    annotation.style.display = 'none';
    var svg = document.querySelector('#gauge_svg');
    svg.appendChild(foreign);
  }

  var svgData = new XMLSerializer().serializeToString(svg);
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  var ctx = canvas.getContext('2d');
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    if (formatValue == 'PNG' || formatValue == 'JPEG') {
      var imagedata = canvas.toDataURL('image/png');
      var anchor = document.createElement('a');
      anchor.download = fileName + '.' + formatValue;
      anchor.href = imagedata;
      document.body.appendChild(anchor);
      anchor.click();
    } else if (formatValue == 'PDF') {
      const document = new PdfDocument();
      var imageString = canvas
        .toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream');
      imageString = imageString.slice(imageString.indexOf(',') + 1);
      document.pages
        .add()
        .graphics.drawImage(
          new PdfBitmap(imageString),
          0,
          0,
          canvas.width,
          canvas.height
        );
      if (circulargauge.allowPdfExport) {
        document.save(fileName + '.' + formatValue);
        document.destroy();
      }
    }
    canvas.remove();
  };
}

// code for property panel

document.getElementById('export').onclick = () => {
  var formatValue = document.getElementById('format').value;
  var fileName = 'Gauge';
  gaugeExport(formatValue, fileName);
};

```
> **Sample**: [Export the Circular Gauge with annotations](https://stackblitz.com/edit/swxrmr?file=index.js).

{% endif %}