import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private testService: TestService){

  }
  title = 'my-app';

  ngOnInit() {
    const service = this.testService.getData();
    console.log('app.component', service);
  }

}
