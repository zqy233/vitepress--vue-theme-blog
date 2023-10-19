# [创建一个场景（Creating a scene）](https://threejs.org/docs/#manual/zh/introduction/Creating-a-scene)

这一部分将对three.js来做一个简要的介绍；我们将开始搭建一个场景，其中包含一个正在旋转的立方体。页面下方有一个已经完成的例子，当你遇到麻烦，或者需要帮助的时候，可以看一看。

## 开始之前

在开始使用three.js之前，你需要一个地方来显示它。将下列HTML代码保存为你电脑上的一个HTML文件然后在你的浏览器中打开这个HTML文件。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script type="module">
			import * as THREE from 'https://unpkg.com/three/build/three.module.js';

			// Our Javascript will go here.
		</script>
	</body>
</html>
```

好了，接下来的所有代码将会写入到空的`<script>`标签中

## 创建一个场景

为了真正能够让你的场景借助three.js来进行显示，我们需要以下几个对象：场景、相机和渲染器，这样我们就能透过摄像机渲染出场景。

```js
const scene = new THREE.Scene();
```

## 创建相机

three.js里有几种不同的相机，在这里，我们使用的是**PerspectiveCamera**（透视摄像机）。

`PerspectiveCamera`构造函数有四个参数：

1. `fov`，**视野**：相机的视野有多宽，以度为单位。第一个参数是**视野角度（FOV）**。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
2. `aspect`，**纵横比**：场景的宽度与高度的比率。第二个参数是**长宽比（aspect ratio）**。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
3. `near`, **近剪裁平面**：任何比这更靠近相机的东西都是不可见的。
4. `far`，**远剪裁平面**：任何比这更远离相机的东西都是不可见的。

当物体某些部分比摄像机的**远截面**远或者比**近截面**近的时候，该这些部分将不会被渲染到场景中。或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。

```js
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
```

## 创建渲染器

接下来是渲染器。这里是施展魔法的地方。除了我们在这里用到的`WebGLRenderer`渲染器之外，Three.js同时提供了其他几种渲染器，当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级。

除了创建一个渲染器的实例之外，我们还需要在我们的应用程序里设置一个渲染器的尺寸。比如说，我们可以使用所需要的渲染区域的宽高，来让渲染器渲染出的场景填充满我们的应用程序。因此，我们可以将渲染器宽高设置为浏览器窗口宽高。对于性能比较敏感的应用程序来说，你可以使用`setSize`传入一个较小的值，例如`window.innerWidth/2`和`window.innerHeight/2`，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景。

如果你希望保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用`setSize`时，将`updateStyle`（第三个参数）设为false。例如，假设你的`<canvas> `标签现在已经具有了100%的宽和高，调用`setSize(window.innerWidth/2, window.innerHeight/2, false)`将使得你的应用程序以一半的分辨率来进行渲染。

最后一步很重要，我们将`renderer`（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中。这就是渲染器用来显示场景给我们看的`<canvas>`元素。

“嗯，看起来很不错，那你说的那个立方体在哪儿？”接下来，我们就来添加立方体。

```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

## 创建立方体

要创建一个立方体，我们需要一个**BoxGeometry**（立方体）对象. 这个对象包含了一个立方体中所有的顶点（**vertices**）和面（**faces**）。未来我们将在这方面进行更多的探索。

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
```

## 创建材质

接下来，对于这个立方体，我们需要给它一个材质，来让它有颜色。Three.js自带了几种材质，在这里我们使用的是**MeshBasicMaterial**。所有的材质都存有应用于他们的属性的对象。在这里为了简单起见，我们只设置一个color属性，值为**0x00ff00**，也就是绿色。这里所做的事情，和在CSS或者Photoshop中使用十六进制(**hex colors**)颜色格式来设置颜色的方式一致。

```js
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
```

## 创建网格

我们需要一个Mesh（网格）。 网格包含一个几何体以及作用在此几何体上的材质，我们可以直接将网格对象放入到我们的场景中，并让它在场景中自由移动。

默认情况下，当我们调用**scene.add()**的时候，物体将会被添加到**(0,0,0)**坐标。但将使得摄像机和立方体彼此在一起。为了防止这种情况的发生，我们只需要将摄像机稍微向外移动一些即可。

```js
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

## 渲染场景

现在，如果将之前写好的代码复制到HTML文件中，你不会在页面中看到任何东西。这是因为我们还没有对它进行真正的渲染。为此，我们需要使用一个被叫做“**渲染循环**”（render loop）或者“**动画循环**”（animate loop）的东西。

在这里我们创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）。如果你是一个浏览器游戏开发的新手，你或许会说*“为什么我们不直接用setInterval来实现刷新的功能呢？”*当然啦，我们的确可以用setInterval，但是，**requestAnimationFrame**有很多的优点。最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。

```js
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

## 使立方体动起来

在开始之前，如果你已经将上面的代码写入到了你所创建的文件中，你可以看到一个绿色的方块。让我们来做一些更加有趣的事 —— 让它旋转起来。

将下列代码添加到animate()函数中**renderer.render**调用的上方：

```js
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```

这段代码每帧都会执行（正常情况下是60次/秒），这就让立方体有了一个看起来很不错的旋转动画。基本上来说，当应用程序运行时，如果你想要移动或者改变任何场景中的东西，都必须要经过这个动画循环。当然，你可以在这个动画循环里调用别的函数，这样你就不会写出有上百行代码的**animate**函数。

## 完整的第一个Three.js应用程序

祝贺你！你现在已经成功完成了你的第一个Three.js应用程序。虽然它很简单，但现在你已经有了一个入门的起点。

下面是完整的代码，可在[live example](https://jsfiddle.net/fxurzeb4/)运行、编辑；运行或者修改代码有助于你更好的理解它是如何工作的。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My first three.js app</title>
    <style>
      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import * as THREE from "https://unpkg.com/three/build/three.module.js";
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      animate();
    </script>
  </body>
</html>
```

