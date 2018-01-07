(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc)
  doc.addEventListener('DOMContentLoaded', recalc)
})(document, window)
