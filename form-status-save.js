var inputs = undefined;
var selects = undefined;

function carregarInputs() {
    inputs = document.getElementsByTagName('input');
    selects = document.getElementsByTagName('select');
}

function salvarStatus(nome_form) {
    carregarInputs();
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

        localStorage.setItem(nome_form, JSON.stringify(input_objects));
    }
}

function verificarStatusSalvo(nome_form) {
    carregarInputs();
    var data_form = localStorage.getItem(nome_form);
    if (data_form != null) {
        var input_objects = JSON.parse(data_form);
        for (var input of input_objects) {
            if (input.id.length > 0) {
                document.getElementById(input.id).value = input.value;
            }
        }
    }
}

function limparStatusFormSalvo(nome_form) {
    localStorage.removeItem(nome_form);
}
