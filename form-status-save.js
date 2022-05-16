var inputs = undefined;
var selects = undefined;
var textareas = undefined;

function loadInputs() {
    inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="password"]):not([type="file"])');
    selects = document.getElementsByTagName('select');
    textareas = document.getElementsByTagName('textarea');
}

function saveFormStatus(form_name) {
    loadInputs();
    if (inputs != undefined && selects != undefined) {
        var input_objects = [];

        for (var input of inputs) input_objects.push({
            'id': input.id,
            'value': input.value,
        });
        for (var select of selects) input_objects.push({
            'id': select.id,
            'value': select.value,
        });

        localStorage.setItem(form_name, JSON.stringify(input_objects));
    }
}

function loadFormStatus(form_name) {
    loadInputs();
    var data_form = localStorage.getItem(form_name);
    if (data_form != null) {
        var input_objects = JSON.parse(data_form);
        for (var input of input_objects) {
            if (input.id.length > 0) {
                document.getElementById(input.id).value = input.value;
            }
        }
    }
}

function resetFormStatus(form_name) {
    localStorage.removeItem(form_name);
}
