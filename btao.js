
document.getElementById('button').addEventListener('click', function() {
  var files = document.getElementById('file').files;
  if (files.length > 0) {
    getBase64(files[0]);
  }
});

function getBase64(file) {
   var reader = new FileReader();
   reader.onload = function () {
     console.log(btoa(reader.result));
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}