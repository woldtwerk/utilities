import { $$ } from '@woldtwerk/utils'

export class Table {
  constructor(public table: HTMLTableElement) {
    if (this.ths?.length) {
      this.addHeadDataToTd()
      this.table.classList.add('boring-table')
    }
  }

  get ths(): Array<HTMLTableCellElement> {
    return $$('thead th', this.table) as [HTMLTableCellElement]
  }

  get tds(): Array<HTMLTableCellElement> {
    return $$('tbody th, tbody td', this.table) as [HTMLTableCellElement]
  }

  addHeadDataToTd(): void {
    const columns = this.ths.length

    this.tds.forEach((td, index) => {
      td.setAttribute('data-label', this.ths[index % columns].innerText)
    })
  }
}
