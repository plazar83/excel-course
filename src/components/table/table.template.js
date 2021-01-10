const CODES = {
  A: 65,
  Z: 90
}

function createRow(index, content) {
  const resizer = index
    ? `<div class="row-resize" data-resize="row" data-row-id="${index}"></div>`
    : ''
  return `
    <div class="row" data-type="resizeble">
      <div class="row-info">
         ${index ? index : ''}
         ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function createCol(countCols) {
  const cols = []
  for (let i = 0; i <= countCols; i++) {
    cols.push(toChar(i))
  }
  return cols.map((col, index) => {
    return `
    <div class="column" data-type="resizeble" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>`
  }).join('')
}

function createCell(countCols) {
  const cols = []
  for (let i = 0; i <= countCols; i++) {
    cols.push(toChar(i))
  }
  return cols.map((col, index) => {
    return `<div class="cell" data-cell="${index}" contenteditable>${col}</div>`
  }).join('')
}
function toChar(index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount=15) {
  const countCols = CODES.Z - CODES.A
  const rows = []
  rows.push(createRow(null, createCol(countCols)))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, createCell(countCols)))
  }

  return rows.join('')
}
