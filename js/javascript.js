function hitung() {
    var p = String(document.forms['pp']['p'].value);
    var t = 'Selamat Datang ' + p;
    document.getElementById('hsl').innerText = t;
}