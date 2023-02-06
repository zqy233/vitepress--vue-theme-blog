# svg

## 获取svg的viewbox属性

```ts
const getGraphSize = () => {
  const viewBox = (document.querySelector(".line-svg").firstChild as SVGAElement).getAttribute(
    "viewBox"
  )
  return viewBox.split(/\s+/)
}
```

## 滚动控制svg放大缩小

通过设置viewbox属性

```ts
const wheel = e => {
  // event.wheelDelta正数表示向上滚动，负数表示向下滚动
  c arrPoint = getGraphSize()
  if (e.wheelDelta > 0) {
    arrPoint[2] = parseInt(arrPoint[2]) * 0.9 + ""
    arrPoint[3] = parseInt(arrPoint[3]) * 0.9 + ""
  } else {
    arrPoint[2] = parseInt(arrPoint[2]) / 0.9 + ""
    arrPoint[3] = parseInt(arrPoint[3]) / 0.9 + ""
  }
  const svg = document.querySelector(".line-svg").firstChild as SVGAElement
  svg.setAttribute("viewBox", arrPoint.join(" "))
}
```

## 设置svg的闪烁动画

```js
const setAnimation = (id: string) => {
  setTimeout(() => {
    const device = document.querySelector("#id" + id)
    var svgNS = "http://www.w3.org/2000/svg"
    var animateGraph = document.createElementNS(svgNS, "animate")
    animateGraph.setAttribute("id", "keyId")
    animateGraph.setAttribute("attributeType", "auto")
    animateGraph.setAttribute("attributeName", "visibility")
    animateGraph.setAttribute("from", "visible")
    animateGraph.setAttribute("to", "hidden")
    animateGraph.setAttribute("dur", "1s")
    animateGraph.setAttribute("begin", "0s")
    animateGraph.setAttribute("fill", "freeze")
    animateGraph.setAttribute("repeatCount", "indefinite")
    device.appendChild(animateGraph)
  }, 50)
}

```

