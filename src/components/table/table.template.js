const CODES = {
  A: 65,
  Z: 90
}

function createRow(index, content) {
  return `
    <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function createCol(countCols) {
  const cols = []
  for (let i = 0; i <= countCols; i++) {
    cols.push(toChar(i))
  }
  return cols.map(col => `<div class="column">${col}</div>`).join('')
}

function createCell(countCols) {
  const cols = []
  for (let i = 0; i <= countCols; i++) {
    cols.push(toChar(i))
  }
  return cols.map(col => `<div class="cell" contenteditable>${col}</div>`)
      .join('')
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
