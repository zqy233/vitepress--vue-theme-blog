# nvue

##  为什么要使用nvue

> uni-app渲染层在app端提供了两套排版引擎：小程序方式的webview渲染，和weex方式的原生渲染

在App端，如果使用vue页面，则使用webview渲染；如果使用nvue页面(native vue的缩写)，则使用原生渲染。一个App中可以同时使用两种页面，比如首页使用nvue，二级页使用vue页面，hello uni-app示例就是如此

两种渲染引擎可以自己根据需要选。vue文件走的webview渲染，nvue走的原生渲染
组件和js写法是一样的，css不一样，原生排版的能用的css必须是flex布局，这是web的css的子集。当然什么界面都可以用flex布出来。不懂flex布局就自己学

一般情况下用vue就可以了。如果是app且有部分场景vue页面的性能不满足你的需求时，这个页面可以改用nvue页面。如果app里同时存在同名的vue和nvue页面，在app端会优先执行nvue页面，而其他端仍然优先vue页面
当然，nvue也可以编译到h5和小程序，也是可以跨端的，只是相比vue写法多些限制

## css受限