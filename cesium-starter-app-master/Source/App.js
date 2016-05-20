var viewer = new Cesium.Viewer('cesiumContainer',{
  baseLayerPicker : false,  //デフォルトのレイヤ切り替えウィジェットをオフにする
  timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
  animation : false         //デフォルトのアニメーションウィジェットをオフにする
});

//viewer.camera.flyTo({   
//destination : Cesium.Cartesian3.fromDegrees(135.127802,35.301379,3000)});
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.6721684, 35.7052493, 50000),
  orientation: {
    heading: 0, // 水平方向の回転
    pitch: -Cesium.Math.PI_OVER_TWO, // 垂直方向の回転 上を見上げたり下を見下ろしたり
    roll: 0
  }
});
