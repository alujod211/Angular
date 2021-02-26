import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1 = 0;
  num2 = 0;
  total = 0;
  result = '';
  sumar(){
    this.total = this.num1 + this.num2;
    if(this.total>100){
      this.result = "Resultado mayor de 100";
    }else if (this.total<100){
      this.result = "Resultado menor de 100";
    }
  }
}

