var viewer = new Cesium.Viewer('cesiumContainer');
var czml = [
  {
    "id" : "document",
    "name" : "fukuchiyama",
    "version" : "1.0"
  }, {
    "id" : "1",
    "name" : "Kさん",
    "description" : "調査エリア学校周辺調査地区堀地区氏名Kさん性別女性居住年数生まれた時から７０〜８０年豪雨時の印象成美高校のあたりから雨がすごかった。経験したことがなかったので大変だった。どのように過ごされていたか家にいるしか出来なかった。浸水被害状況一宮神社の石のところまでギリギリ大変だったこと高見の見物",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.1320894411087,35.28799163469748,0
      ]
    }
  },{
    "id" : "2",
    "name" : "Mさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.130594,35.288045,0
      ]
    }
  },{
    "id" : "3",
    "name" : "Hさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.1297291543509,35.29059108578114,0
      ]
    }
  },{
    "id" : "4",
    "name" : "Fさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.1291249538861,35.29101553129239,0
      ]
    }
  },{
    "id" : "5",
    "name" : "Sさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.1306683058458,35.28645127024259,0
      ]
    }
  },{
    "id" : "6",
    "name" : "Mさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.1181093768303,35.29390321162933,0
      ]
    }
  },{
    "id" : "7",
    "name" : "Aさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/a.png",
      "scale" : 0.2
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
        135.1194179846911,35.29378470577179,0
      ]
    }
  },{
    "id" : "8",
    "name" : "Tさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/t.png",
      "scale" : 0.2
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
        135.1171880924785,35.29568045589838,0
      ]
    }
  },{
    "id" : "9",
    "name" : "駅員さん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.118431462511,35.29605795858646,0
      ]
    }
  },{
    "id" : "10",
    "name" : "駅員さん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.118964,35.296067,0
      ]
    }
  },{
    "id" : "11",
    "name" : "Kさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.129778,35.298046,0
      ]
    }
  },{
    "id" : "12",
    "name" : "Aさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.131259,35.297258,0
      ]
    }
  },{
    "id" : "12",
    "name" : "Yさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/y.png",
      "scale" : 0.2
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
        135.1119291148579,35.31039213781048,0
      ]
    }
  },{
    "id" : "13",
    "name" : "Nさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/n.png",
      "scale" : 0.2
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
        135.1121741359157,35.31257401785641,0
      ]
    }
  },{
    "id" : "14",
    "name" : "Fさん",
    "description" : "test",
    "billboard" : {
      "image" : "http://sagara1020.github.io/demo/cesium-starter-app-master/Source/img/noimage.png",
      "scale" : 0.2
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
        135.111561,35.310111,0
      ]
    }
  }
];
viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/demo/cesium-starter-app-master/Source/water_area.kml'));
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(135.1320894411087,35.28799163469748,8000)
});
