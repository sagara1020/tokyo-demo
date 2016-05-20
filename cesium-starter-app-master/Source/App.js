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
var baseLayers = viewModel.baseLayers;
function setupLayers() {
    // Create all the base layers that this example will support.
    // These base layers aren't really special.  It's possible to have multiple of them
    // enabled at once, just like the other layers, but it doesn't make much sense because
    // all of these layers cover the entire globe and are opaque.
    addBaseLayerOption(
            'Bing Maps Aerial',
            undefined); // the current base layer
    // Create the additional layers
    addBaseLayerOption(
      '地理院地図',
            new Cesium.OpenStreetMapImageryProvider({
                url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
                credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
            }));
    // Create the additional layers
    addBaseLayerOption(
      '電子国土基本図（オルソ画像）',
      new Cesium.OpenStreetMapImageryProvider({
        url: 'http://cyberjapandata.gsi.go.jp/xyz/ort/',
        credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
      }));
    addAdditionalLayerOption(
      '迅速測図',
      new Cesium.OpenStreetMapImageryProvider({
        url: 'http://www.finds.jp/ws/tmc/1.0.0/Kanto_Rapid-900913-L/',
        "ext": "jpg",
        "zmin": 0,
        "zmax": 18,
        credit : 'CC BY 国立研究開発法人農業環境技術研究所 歴史的農業環境閲覧システム',
      }));
}
