import{_ as e,o as a,c as r,a as t}from"./app.bfa9bd4b.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"WebGL是什么意思","slug":"webgl是什么意思","link":"#webgl是什么意思","children":[]},{"level":2,"title":"透视相机(PerspectiveCamera)","slug":"透视相机-perspectivecamera","link":"#透视相机-perspectivecamera","children":[]},{"level":2,"title":"材质","slug":"材质","link":"#材质","children":[]},{"level":2,"title":"光源","slug":"光源","link":"#光源","children":[]}],"relativePath":"4.库/threejs/api.md","lastUpdated":1720835436702}'),c={name:"4.库/threejs/api.md"},i=t('<h2 id="webgl是什么意思" tabindex="-1">WebGL是什么意思 <a class="header-anchor" href="#webgl是什么意思" aria-hidden="true">#</a></h2><p>WebGL的全称是Web Graphics Library，它是一种用于在网页浏览器中渲染交互式3D图形的技术。它基于OpenGL（一种广泛用于计算机图形学的编程接口）并通过JavaScript API提供了在网页上创建和展示复杂的3D图形的能力。</p><p>WebGL使开发者能够使用JavaScript编写代码，直接在网页中呈现高性能的3D图形，无需使用插件或其他外部软件。它允许开发者利用计算机的图形硬件来执行复杂的图形计算，从而实现各种视觉效果和交互体验，比如3D模型渲染、游戏开发、数据可视化等。</p><p>WebGL技术的实现依赖于浏览器的支持，目前大多数主流浏览器（如Chrome、Firefox、Safari等）都已经支持了WebGL。开发者可以使用WebGL创建各种令人印象深刻的网页图形，但由于其复杂性，它通常需要一定程度的图形编程和数学知识。</p><h2 id="透视相机-perspectivecamera" tabindex="-1"><a href="https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera" target="_blank" rel="noreferrer">透视相机(<code>PerspectiveCamera</code>)</a> <a class="header-anchor" href="#透视相机-perspectivecamera" aria-hidden="true">#</a></h2><blockquote><p>参考资料：</p><p><a href="https://juejin.cn/post/7055179266773745672" target="_blank" rel="noreferrer">https://juejin.cn/post/7055179266773745672</a></p></blockquote><p>在<code>three.js</code>中，<code>摄像机</code>的作用就是不断的拍摄我们创建好的场景，然后通过<code>渲染器</code>渲染到屏幕中。想通过不同的角度观看场景，就需要修改<code>摄像机</code>的位置来拍摄场景。本文详细介绍的是<code>透视相机（PerspectiveCamera）</code> 它是用来模拟人眼所看到的景象，它也是3D场景的渲染中使用得最普遍的投影模式。</p><ul><li>根据视锥的范围给<code>渲染器</code>提供需要渲染的场景范围。</li><li>实例化<code>new THREE.PerspectiveCamera()</code> 接受4个参数来确认视锥的范围。只要在视锥范围内的场景才会渲染。</li></ul><ol><li><code>fov</code> 摄像机视锥体垂直视野角度。</li><li><code>aspect</code> 摄像机视锥体长宽比。</li><li><code>near</code> 摄像机视锥体近端面。</li><li><code>far</code> 摄像机视锥体远端面。</li></ol><h2 id="材质" tabindex="-1">材质 <a class="header-anchor" href="#材质" aria-hidden="true">#</a></h2><h2 id="光源" tabindex="-1">光源 <a class="header-anchor" href="#光源" aria-hidden="true">#</a></h2><blockquote><p><a href="https://threejs.org/docs/#api/zh/lights/AmbientLight" target="_blank" rel="noreferrer">https://threejs.org/docs/#api/zh/lights/AmbientLight</a></p></blockquote>',12),o=[i];function l(d,s,p,h,n,_){return a(),r("div",null,o)}const m=e(c,[["render",l]]);export{f as __pageData,m as default};
