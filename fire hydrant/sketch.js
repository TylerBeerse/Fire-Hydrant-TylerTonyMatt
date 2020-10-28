

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

let options = {
  lat: 42.90510,
  lng: -78.87020,
  zoom: 14,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}


function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  firstPath = loadTable('tylerfile.csv', 'csv', 'header');
  secondPath = loadTable('mattfile.csv', 'csv', 'header');
  thirdPath = loadTable('tonyfile.csv', 'csv', 'header');
}


function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  //myMap.onChange(drawPath(firstPath));
  //myMap.onChange(drawPath(secondPath));
  myMap.onChange(drawPathTyler.bind(null, firstPath));
  myMap.onChange(drawPathMatt.bind(null, secondPath));
  myMap.onChange(drawPathTony.bind(null, thirdPath));
}


function draw() {
}


function drawPathTyler(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(255, 0, 0, 10);
      ellipse(pos.x, pos.y, 25)

      stroke('wite');
      strokeWeight(1.5);
      // noStroke();
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawPathMatt(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(0, 255, 0, 10);
      ellipse(pos.x, pos.y, 20, 20)

      stroke('white');
      strokeWeight(1.5);

      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawPathTony(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(0, 0, 255, 10);
      ellipse(pos.x, pos.y, 20, 20)

      stroke('white');
      strokeWeight(1.5);
      // noStroke();
      line(pos.x, pos.y, pos.x, pos.y);

    }
  }
}
