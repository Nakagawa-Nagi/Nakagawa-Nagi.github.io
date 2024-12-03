var pjax = new Pjax({selectors: [".pjaxx","head","#banner"]});

function pjax_reload() {
  //其他需要重新加载的函数也可以添加在这里
  Fluid.plugins.fancyBox();
 }

// Pjax 完成后，重新加载上面的函数
document.addEventListener("pjax:complete", function () {
    pjax_reload();
});
 