# usage

``` bash
npm install @typeofnan/dev-tools
```

``` js
const { arrayEqual } = require('@typeofnan/dev-tools')

arrayEqual(arr1, arr2)
```

# Function

1. arrayEqual(arr1, arr2)
* @desc 判断两个数组是否相等
* @param {Array} arr1
* @param {Array} arr2
* @return {Boolean}

2. getCookie(name)
* @desc 根据name读取cookie
* @param  {String} name
* @return {String}

3. setCookie(name, value, days)
* @desc  设置Cookie
* @param {String} name
* @param {String} value
* @param {Number} days

4. getExplore()
* @desc 获取浏览器类型和版本
* @return {String}

5. getOS()
* @desc 获取操作系统类型
* @return {String}

6. getScrollTop()
* @desc 获取滚动条距顶部的距离

7. offset(ele)
* @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
* @param {HTMLElement} ele
* @returns { {left: number, top: number} }

8. setScrollTop(value)
* @desc 设置滚动条距顶部的距离

9. isEmptyObject(obj)
* @desc   判断`obj`是否为空
* @param  {Object} obj
* @return {Boolean}

10. randomColor()
* @desc 随机生成颜色
* @return {String}

11. randomNum(min, max)
* @desc 生成指定范围随机数
* @param  {Number} min
* @param  {Number} max
* @return {Number}

12. isEmail(str)
* @desc   判断是否为邮箱地址
* @param  {String}  str
* @return {Boolean}

13. isIdCard(str)
* @desc  判断是否为身份证号
* @param  {String|Number} str 
* @return {Boolean}

14. isPhoneNum(str)
* @desc   判断是否为手机号
* @param  {String|Number} str 
* @return {Boolean}

15. isUrl(str)
* @desc   判断是否为URL地址
* @param  {String} str 
* @return {Boolean}