var map = L.map('map').setView([39.75621,-104.99404], 4);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Albuquerque",
        "Population": "100,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.644287109375,
          35.110921809704756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Denver",
        "Population": "1,000,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.9853515625,
          39.740986355883564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Pueblo",
        "Population": "1,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.56787109374999,
          38.272688535980976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Bloomfield",
        "Population": "10,000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.984619140625,
          36.73888412439431
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -106.5234375,
            35.10193405724606
          ],
          [
            -106.41357421875,
            35.37113502280101
          ],
          [
            -106.0400390625,
            35.567980458012094
          ],
          [
            -105.79833984375,
            35.69299463209881
          ],
          [
            -105.6005859375,
            35.47856499535729
          ],
          [
            -105.40283203124999,
            35.460669951495305
          ],
          [
            -105.09521484375,
            35.69299463209881
          ],
          [
            -104.83154296875,
            35.94243575255426
          ],
          [
            -104.74365234375,
            36.049098959065645
          ],
          [
            -104.6337890625,
            36.2265501474709
          ],
          [
            -104.6337890625,
            36.421282443649496
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "party": "Democrat"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -114.60937499999999,
              35.137879119634185
            ],
            [
              -113.90625,
              36.421282443649496
            ],
            [
              -113.9501953125,
              42.16340342422401
            ],
            [
              -119.970703125,
              42.09822241118974
            ],
            [
              -119.970703125,
              38.85682013474361
            ],
            [
              -114.697265625,
              35.35321610123823
            ],
            [
              -114.60937499999999,
              35.137879119634185
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "party": "Republican"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -114.06005859375,
              41.983994270935625
            ],
            [
              -113.51074218749999,
              40.613952441166596
            ],
            [
              -113.73046875,
              36.98500309285596
            ],
            [
              -108.96240234375,
              37.142803443716836
            ],
            [
              -109.248046875,
              40.91351257612758
            ],
            [
              -111.005859375,
              40.94671366508002
            ],
            [
              -110.9619140625,
              41.918628865183045
            ],
            [
              -114.06005859375,
              41.983994270935625
            ]
          ]
        ]
      }
    }
  ]
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#C8C9C7"};
            case 'Democrat':   return {color: "#003DA5"};
        }
    }
}).addTo(map);
