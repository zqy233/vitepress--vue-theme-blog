## 获取指定范围的日期

```js
 // 周五
this.startDate = dayjs().startOf("week").add(5, "day").format("YYYY-MM-DD")
// 下周四
this.endDate = dayjs().startOf("week").add(11, "day").format("YYYY-MM-DD")
this.getMainNetOverhual()
```

## 昨天

```js
dayjs().subtract(1, "day").format("YYYY-MM-DD")
```

