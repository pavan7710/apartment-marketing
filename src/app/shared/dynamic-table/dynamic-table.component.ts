import { Component , input, Input , OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent implements OnInit {
  @Input() tableData: any[] = []
  @Input() tableColumns: any[] = []
  @Input() customTemplates : { [key:string] : TemplateRef<any> } = {} 
  
  ngOnInit(): void {
    console.log(this.tableColumns)
  }
}
