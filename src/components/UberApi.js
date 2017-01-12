const Uber = require('uber-api')({server_token:'rXFtyR-_8FnRpknNVFkDlkb1Psi_B-bdVa2mD_Pf', version:'v1'}),
    lat = 34.0522,
    lon = 118.2437;
 
Uber.getProducts(lat, lon, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
 
Uber.getProducts(lat, lon).then(function(response){
  console.log(response);
}, function(error){
  console.error(response);
});