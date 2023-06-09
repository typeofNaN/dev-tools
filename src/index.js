module.exports = {
  /**
   * @description 判断两个数组是否相等
   * @param { Array } arr1
   * @param { Array } arr2
   * @return { Boolean }
   */
  arrayEqual(arr1, arr2) {
    if (arr1 === arr2) return true
    if (arr1.length !== arr2.length) return false
    for (var i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  },

  /**
   * @description 根据name读取cookie
   * @param { String } name
   * @return { String }
   */
  getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';')
    for (var i = 0; i < arr.length; i++) {
      var tempArr = arr[i].split('=')
      if (tempArr[0] === name) {
        return decodeURIComponent(tempArr[1])
      }
    }
    return ''
  },

  /**
   * @description  设置Cookie
   * @param { String } name
   * @param { String } value
   * @param { Number } days
   */
  setCookie(name, value, days) {
    var date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = name + '=' + value + ';expires=' + date
  },

  /**
   * @description 获取浏览器类型和版本
   * @return { String }
   */
  getExplore() {
    var sys = {},
      ua = navigator.userAgent.toLowerCase(),
      s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/))
      ? sys.ie = s[1]
      : (s = ua.match(/msie ([\d\.]+)/))
        ? sys.ie = s[1]
        : (s = ua.match(/edge\/([\d\.]+)/))
          ? sys.edge = s[1]
          : (s = ua.match(/firefox\/([\d\.]+)/))
            ? sys.firefox = s[1]
            : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
              ? sys.opera = s[1]
              : (s = ua.match(/chrome\/([\d\.]+)/))
                ? sys.chrome = s[1]
                : (s = ua.match(/version\/([\d\.]+).*safari/))
                  ? sys.safari = s[1]
                  : 0
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'unknown'
  },

  /**
   * @description 获取操作系统类型
   * @return { String }
   */
  getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || ''
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || ''
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || ''
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
  },

  /**
   * @description 获取滚动条距顶部的距离
   */
  getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
  },

  /**
   * @description  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
   * @param { HTMLElement } ele
   * @returns { { left: number, top: number } }
   */
  offset(ele) {
    var pos = {
      left: 0,
      top: 0
    }
    while (ele) {
      pos.left += ele.offsetLeft
      pos.top += ele.offsetTop
      ele = ele.offsetParent
    }
    return pos
  },

  /**
   * @description 设置滚动条距顶部的距离
   */
  setScrollTop(value) {
    window.scrollTo(0, value)
    return value
  },

  /**
   * @description   判断`obj`是否为空
   * @param  {Object } obj
   * @return { Boolean }
   */
  isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
      return false
    return !Object.keys(obj).length
  },

  /**
   * @description 随机生成颜色
   * @return { String } 
   */
  randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
  },

  /**
   * @description 生成指定范围随机数
   * @param  {Number } min
   * @param  {Number } max
   * @return { Number}
   */
  randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min))
  },

  /**
   * @description   判断是否为邮箱地址
   * @param  {String } str
   * @return { Boolean }
   */
  isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
  },

  /**
   * @description  判断是否为身份证号
   * @param  {String|Number } str
   * @return { Boolean }
   */
  isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  },

  /**
   * @description   判断是否为手机号
   * @param  {String|Number } str
   * @return { Boolean }
   */
  isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  },

  /**
   * @description   判断是否为URL地址
   * @param  {String } str
   * @return { Boolean }
   */
  isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
  }
}