var inputs = document.getElementsByTagName('input');
var selects = document.getElementsByTagName('select');

function salvarStatus() {
  var input_objects = [];

  for (var input of inputs) input_objects.push({
    'id': input.id,
    'value': input.value,
  });
  for (var select of selects) input_objects.push({
    'id': select.id,
    'value': select.value,
  });
  
  localStorage.setItem('produto_form_status', JSON.stringify(input_objects));
}

function verificarStatusSalvo() {
  var data_form = localStorage.getItem('produto_form_status');
  if (data_form != null) {
      var input_objects = JSON.parse(data_form);
      for (var input of input_objects) {
          if (input.id.length > 0) {
              document.getElementById(input.id).value = input.value;
          }
      }
  }
}
