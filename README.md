<h1 align="center">SaveFormStatus.js</h1>

<p align="center">
Save your form status simply.
</p>

<p align="center">
<a href="https://github.com/PedroHenriqueDevBR/save-form-status.js/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/PedroHenriqueDevBR/save-form-status.js"></a>
<a href="https://github.com/PedroHenriqueDevBR/save-form-status.js/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/PedroHenriqueDevBR/save-form-status.js?style=flat-square"></a>
<a href="https://github.com/PedroHenriqueDevBR/save-form-status.js/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/PedroHenriqueDevBR/save-form-status.js?style=flat-square"></a>
</p> 

<hr>

## General description

This lib help you when you need close or refresh the HTML page but can't lost typed data in the form.

## How to use

All the input elements in HTML **form** need has **id** attribute, the Save Form Status search all inputs, selects and text areas, get the id, input type and value, use the LocalStorage to save form data in JSON format.

## Example

Example link: [https://pedrohenriquedevbr.github.io/site/save-form-status/](https://pedrohenriquedevbr.github.io/site/save-form-status/)

--
 | - index.html
 | - script.js
 | - save-form-status.js
 

**index.html**
```html
...
<h1>Example</h1>
    <hr>
    <main>
        <div id="form-container">
            <form>
                <p>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name">
                </p>
                <p>
                    <label for="pass">Password (don't save this input type):</label>
                    <input type="password" name="pass" id="pass">
                </p>
                <p>
                    <label for="hidden">Hidden (don't save this input type):</label>
                    <input type="hidden" name="hidden" id="hidden">
                </p>
                <p>
                    <label for="age">Age: </label>
                    <input type="number" name="age" id="age">
                </p>
                <p>
                    <label for="color">Preferred Color: </label>
                    <input type="color" name="color" id="color">
                </p>
                <p>
                    <label for="animal">Animals: </label><br>
                    <input type="checkbox" name="animal" id="animal01" value="Dog">Dog<br>
                    <input type="checkbox" name="animal" id="animal02" value="Cat">Cat<br>
                    <input type="checkbox" name="animal" id="animal03" value="Ramster">Ramster<br>
                </p>
                <p>
                    <label for="photo">Photo (don't save this input type): </label>
                    <input type="file" src="" alt="photo" id="photo" name="photo">
                </p>
                <p>
                    <label>Done: </label><br>
                    <input type="radio" name="done" id="male_sex" value="Yes">Yes<br>
                    <input type="radio" name="done" id="female_sex" value="No">No<br>
                </p>
                <p>
                    <label for="date">Date: </label>
                    <input type="date" name="date" id="date">
                </p>
                <p>
                    <label for="country">Country: </label>
                    <select name="country" id="country">
                        <option value="brazil">Brasil</option>
                        <option value="portugal">Portugal</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                    </select>
                </p>
                <p>
                    <label for="description">Description: </label><br>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                </p>

                <button type="button" onclick="saveData()">Save status</button>
                <button type="reset" onclick="resetData()">Reset</button>
            </form>
        </div>
        <div id="status-container">
            <pre id="status-json"></pre>
        </div>
    </main>

    <script src="save-form-status.js"></script>
    <script src="script.js"></script>
...
```

**script.js**
```javascript
var FORM_NAME = 'presentation_form';
var statusJSON = document.getElementById('status-json');

function saveData() {
    saveFormStatus(FORM_NAME);
    var data = localStorage.getItem(FORM_NAME);
    showPreJson();
}

function loadData() {
    loadFormStatus(FORM_NAME);
    showPreJson();
}

function resetData() {
    resetFormStatus(FORM_NAME);
    statusJSON.innerHTML = '';
}

function showPreJson() {
    var data = localStorage.getItem(FORM_NAME);
    data = JSON.parse(data);
    data = JSON.stringify(data, null, 4);
    statusJSON.innerHTML = data;
}

addEventListener('load', loadData);
```
