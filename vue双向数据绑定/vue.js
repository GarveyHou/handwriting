< !DOCTYPE html >
  <
  html lang = "en" >

  <
  head >
  <
  meta charset = "UTF-8" >
  <
  meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
  <
  meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
  <
  title > Document < /title> <
  /head>

<
body >
  <
  script >
  var a = [
    2, 10, 3.2, 9, 8, 2, 9, 8, 7, 4, 7, 9, 5, 3.2
  ]

var set = new Set();

for (var i = 0; i < a.length; a++) {
  // if (set.has(a[i])) {
  //   console.log(a[i]);
  // }
  set.add(a[i]);
}
console.log(set); <
/script>

<
/body>

<
/html>st value = this.key.spilt('.').reduce((newObj, k) => {
return newObj[k]
}, this.vm)
this.callback(value);
}





}