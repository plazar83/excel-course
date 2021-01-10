import {$} from '@core/Dom';

export function resizeHandler($this) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizeble"]')
  const $cords = $parent.getCoords()
  const type = $resizer.data.resize
  let value
  document.onmousemove = ev => {
    $parent.$el.classList.add('resize')
    if (type === 'col') {
      const delta = ev.pageX - $cords.right
      value = $cords.width + delta
      $parent.css({width: value + 'px'})
    } else {
      const delta = ev.pageY - $cords.bottom
      value = $cords.height + delta
      $resizer.css({bottom: - delta + 'px'})
    }
  }
  document.onmouseup = ev => {
    document.onmousemove = null
    document.onmouseup = null
    $parent.$el.classList.remove('resize')
    if (type === 'col') {
      $this.$root.findAll(`[data-cell="${$parent.data.col}"]`)
          .forEach(cell => cell.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
      $resizer.css({bottom: 0})
    }
  }
}
