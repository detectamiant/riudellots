var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var format_positiusriudellots_1 = new ol.format.GeoJSON();
var features_positiusriudellots_1 = format_positiusriudellots_1.readFeatures(json_positiusriudellots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_positiusriudellots_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_positiusriudellots_1.addFeatures(features_positiusriudellots_1);
var lyr_positiusriudellots_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_positiusriudellots_1, 
                style: style_positiusriudellots_1,
                interactive: true,
                title: '<img src="styles/legend/positiusriudellots_1.png" /> positius riudellots'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_positiusriudellots_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_positiusriudellots_1];
lyr_positiusriudellots_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'àrea': 'àrea', 'layer': 'layer', 'path': 'path', });
lyr_positiusriudellots_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'àrea': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_positiusriudellots_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'àrea': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_positiusriudellots_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});