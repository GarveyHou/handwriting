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
  var a = [];
console.log(typeof a); <
/script>

<
/body>

<
/html>.target = vm;
//读取这个属性值，会调用observer里的getter，observer里面有一个dep实例，set里面dep.notice来调用每个watcher的update函数，update函数其实是一个回调，在通过dep.notice()

Dep.target = null;


}
update() {
  this.fn();
}




}