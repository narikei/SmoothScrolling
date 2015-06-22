/*
  SmoothScrolling v1.0.0
  This can smooth scroll all of the elements in your website. Vertical Scrolling & Horizontal Scrolling is OK.
  url:https://github.com/narikei/SmoothScrolling
*/
;(function(window) {
  window.SmoothScrolling = function(target, top, left) {
    var level = 20
    var scrollLockLabel = "data-smooth_scroll"
    var scrollLockKey = Math.floor(Math.random() * 9999)

    var startPosition = {
      top: target.scrollTop,
      left: target.scrollLeft
    }

    var currentPosition = startPosition

    function scrollTarget() {
      setTimeout(function() {
        var toLeft, toTop

        if (startPosition.left > left && target.scrollLeft > left) {
          toLeft = parseInt(currentPosition.left - (currentPosition.left - left) / level) - 1
        } else if (startPosition.left < left && target.scrollLeft < left) {
          toLeft = parseInt(currentPosition.left + (left - currentPosition.left) / level) + 1
        }

        if (startPosition.top > top && target.scrollTop > top) {
          toTop = parseInt(currentPosition.top - (currentPosition.top - top) / level) - 1
        } else if (startPosition.top < top && target.scrollTop < top) {
          toTop = parseInt(currentPosition.top + (top - currentPosition.top) / level) + 1
        }

        var update = false
        if (toLeft && currentPosition.left !== toLeft) {
          target.scrollLeft = toLeft
          currentPosition.left = toLeft
          update = true
        }

        if (toTop) {
          target.scrollTop = toTop
          currentPosition.top = toTop
          update = true
        }

        if (update && target.getAttribute(scrollLockLabel) == scrollLockKey) {
          scrollTarget()
        }
      }, 10)
    }

    target.setAttribute(scrollLockLabel, scrollLockKey)
    scrollTarget()
  }
})(window);
