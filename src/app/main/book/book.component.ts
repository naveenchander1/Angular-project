import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  data: Array<any> = [{label: 1, values: 'one'}, {label: 2, values: 'two'}]
  constructor(private testService: TestService) {}
ngOnInit(){
  const service = this.testService.getData().subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
})
  console.log('book.component', service);
}
}
