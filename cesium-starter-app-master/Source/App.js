var viewer = new Cesium.Viewer('cesiumContainer',{
  baseLayerPicker : false,  //デフォルトのレイヤ切り替えウィジェットをオフにする
  timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
  animation : false         //デフォルトのアニメーションウィジェットをオフにする
});

var terrainProvider = new Cesium.JapanGSITerrainProvider({
  heightPower: 1.0 //高さの倍率の設定
});
viewer.terrainProvider = terrainProvider;

viewer.camera.flyTo({   
destination : Cesium.Cartesian3.fromDegrees(135.127802,35.301379,3000)});

var czml = [
  {
    "id" : "document",
    "name" : "fukuchiyama",
    "version" : "1.0"
  }, {
    "id" : "1",
    "name" : "Kさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/k_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1320894411087,35.28799163469748,70
      ]
    }
  },{
    "id" : "2",
    "name" : "Mさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/ma_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.130594,35.288045,70
      ]
    }
  },{
    "id" : "3",
    "name" : "Hさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/h_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1297291543509,35.29059108578114,70
      ]
    }
  },{
    "id" : "4",
    "name" : "Fさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/f_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1291249538861,35.29101553129239,70
      ]
    }
  },{
    "id" : "5",
    "name" : "Sさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/s_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1306683058458,35.28645127024259,70
      ]
    }
  },{
    "id" : "6",
    "name" : "Mさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/m_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1181093768303,35.29390321162933,70
      ]
    }
  },{
    "id" : "7",
    "name" : "Aさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/a_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/a.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1194179846911,35.29378470577179,70
      ]
    }
  },{
    "id" : "8",
    "name" : "Tさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/t_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/t.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1171880924785,35.29568045589838,70
      ]
    }
  },{
    "id" : "9",
    "name" : "駅員さん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/eki1.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.118431462511,35.29605795858646,70
      ]
    }
  },{
    "id" : "10",
    "name" : "駅員さん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/eki2.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.118964,35.296067,70
      ]
    }
  },{
    "id" : "11",
    "name" : "Kさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/kk_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.129778,35.298046,70
      ]
    }
  },{
    "id" : "12",
    "name" : "Aさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/aa_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.131259,35.297258,70
      ]
    }
  },{
    "id" : "13",
    "name" : "Yさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/y_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/y.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1119291148579,35.31039213781048,70
      ]
    }
  },{
    "id" : "14",
    "name" : "Nさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/n_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/n.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1121741359157,35.31257401785641,70
      ]
    }
  },{
    "id" : "15",
    "name" : "Fさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/ff_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.111561,35.310111,70
      ]
    }
  },{
    "id" : "16",
    "name" : "Hさん",
    "description" : "<iframe width='450'px, height='700px', src = 'http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/html/hi_san.html'></iframe>",
    "billboard" : {
      "image" : "http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/img/h.PNG",
      "scale" : 0.24
    },
    "label" : {
      "fillColor" : {
        "rgba" : [0, 0, 0, 255]
      },
      "font" : "12pt Lucida Console",
      "horizontalOrigin" : "CENTER",
      "outlineColor" : {
        "rgba":[0, 0, 0, 255]
      },
      "outlineWidth" : 1.2,
      "pixelOffset" : {
        "cartesian2" : [0, 55]
      },
      "style" : "FILL_AND_OUTLINE",
      "text" : ""
    },
    "position" : {
      "cartographicDegrees": [
        135.1312113729885,35.29587344698348,70
      ]
    }
  }
];

viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/water_area.kml'));
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/tokyo-demo/cesium-starter-app-master/Source/refuge.kmz'));

// 各種レイヤーの透過度の初期設定
var imageryLayers = viewer.imageryLayers;
var viewModel = {
    layers : [],
    baseLayers : [],
    upLayer : null,
    downLayer : null,
    selectedLayer : null,
    isSelectableLayer : function(layer) {
        return baseLayers.indexOf(layer) >= 0;
    },
    raise : function(layer, index) {
        imageryLayers.raise(layer);
        viewModel.upLayer = layer;
        viewModel.downLayer = viewModel.layers[Math.max(0, index - 1)];
        updateLayerList();
        window.setTimeout(function() { viewModel.upLayer = viewModel.downLayer = null; }, 10);
    },
    lower : function(layer, index) {
        imageryLayers.lower(layer);
        viewModel.upLayer = viewModel.layers[Math.min(viewModel.layers.length - 1, index + 1)];
        viewModel.downLayer = layer;
        updateLayerList();
        window.setTimeout(function() { viewModel.upLayer = viewModel.downLayer = null; }, 10);
    },
    canRaise : function(layerIndex) {
        return layerIndex > 0;
    },
    canLower : function(layerIndex) {
        return layerIndex >= 0 && layerIndex < imageryLayers.length - 1;
    }
};
Cesium.knockout.track(viewModel);

var baseLayers = viewModel.baseLayers;
function setupLayers() {
      addBaseLayerOption(
      '地理院地図',
            new Cesium.OpenStreetMapImageryProvider({
                url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
                credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
            }));
          }
  function addBaseLayerOption(name, imageryProvider) {
      var layer;
      if (typeof imageryProvider === 'undefined') {
          layer = imageryLayers.get(0);
          viewModel.selectedLayer = layer;
      } else {
          layer = new Cesium.ImageryLayer(imageryProvider);
      }

      layer.name = name;
      baseLayers.push(layer);
  }


  function addAdditionalLayerOption(name, imageryProvider, alpha, show) {
      var layer = imageryLayers.addImageryProvider(imageryProvider);
      layer.alpha = Cesium.defaultValue(alpha, 1);
      layer.show = Cesium.defaultValue(show, true);
      layer.name = name;
      Cesium.knockout.track(layer, ['alpha', 'show', 'name']);
  }

  function updateLayerList() {
      var numLayers = imageryLayers.length;
      viewModel.layers.splice(0, viewModel.layers.length);
      for (var i = numLayers - 1; i >= 0; --i) {
          viewModel.layers.push(imageryLayers.get(i));
      }
  }

  setupLayers();
  updateLayerList();


  //Bind the viewModel to the DOM elements of the UI that call for it.
  var toolbar = document.getElementById('toolbar');
  Cesium.knockout.applyBindings(viewModel, toolbar);

  Cesium.knockout.getObservable(viewModel, 'selectedLayer').subscribe(function(baseLayer) {
      // Handle changes to the drop-down base layer selector.
      var activeLayerIndex = 0;
      var numLayers = viewModel.layers.length;
      for (var i = 0; i < numLayers; ++i) {
          if (viewModel.isSelectableLayer(viewModel.layers[i])) {
              activeLayerIndex = i;
              break;
          }
      }
      var activeLayer = viewModel.layers[activeLayerIndex];
      var show = activeLayer.show;
      var alpha = activeLayer.alpha;
      imageryLayers.remove(activeLayer, false);
      imageryLayers.add(baseLayer, numLayers - activeLayerIndex - 1);
      baseLayer.show = show;
      baseLayer.alpha = alpha;
      updateLayerList();
  });
