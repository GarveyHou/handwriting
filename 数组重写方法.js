< !DOCTYPE html >
  <
  html >

  <
  head >
  <
  title > < /title> < /
  head >

  <
  body >


  <
  div id = 'container' > aaaaaaaa < /div>

<
button id = 'btn' > 按钮 < /button>

<
script type = "text/javascript"
src = '/index.js' > < /script> < /
  body >

  <
  /html>
  /**
   * Intercept mutating methods and emit events
   */
methodsToPatch.forEach(function(method) {
  // 缓存原生数组方法
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    // 执行并缓存原生数组功能
    const result = original.apply(this, args);
    // 响应式处理
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      // push、unshift会新增索引，所以要手动observer
      case "push":
      case "unshift":
        inserted = args;
        break;
        // splice方法，如果传入了第三个参数，也会有索引加入，也要手动observer。
      case "splice":
        inserted = args.slice(2);
        break;
    }
    // 
    if (inserted) ob.observeArray(inserted); // 获取插入的值，并设置响应式监听
    // notify change
    ob.dep.notify(); // 通知依赖更新
    // 返回原生数组方法的执行结果
    return result;
  });
});