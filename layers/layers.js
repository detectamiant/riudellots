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
var format_PositiusRiudellots10052024_1 = new ol.format.GeoJSON();
var features_PositiusRiudellots10052024_1 = format_PositiusRiudellots10052024_1.readFeatures(json_PositiusRiudellots10052024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositiusRiudellots10052024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositiusRiudellots10052024_1.addFeatures(features_PositiusRiudellots10052024_1);
var lyr_PositiusRiudellots10052024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PositiusRiudellots10052024_1, 
                style: style_PositiusRiudellots10052024_1,
                popuplayertitle: "Positius Riudellots 10052024",
                interactive: true,
                title: '<img src="styles/legend/PositiusRiudellots10052024_1.png" /> Positius Riudellots 10052024'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,],
                                fold: "open",
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_PositiusRiudellots10052024_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_PositiusRiudellots10052024_1];
lyr_PositiusRiudellots10052024_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'àrea': 'àrea', 'layer': 'layer', 'path': 'path', });
lyr_PositiusRiudellots10052024_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'àrea': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PositiusRiudellots10052024_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'àrea': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PositiusRiudellots10052024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});