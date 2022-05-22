function loadData() {
    document.getElementById('1').value = localStorage.getItem('1')
    document.getElementById('2').value = localStorage.getItem('2')
}
loadData();
function updateTimestamp(obj) {
    localStorage.setItem(obj.id, obj.value);
    document.getElementById('timestamp').value = moment().format('l') + " " + moment().format('LTS');
    // https://stackoverflow.com/questions/5211328/clicking-submit-button-of-an-html-form-by-a-javascript-code
    document.getElementById('Submit').click();
}