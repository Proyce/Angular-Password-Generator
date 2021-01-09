import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onLengthChange(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onLettersChange(){
    this.includeLetters = !this.includeLetters
  }
  onNumbersChange(){
    this.includeNumbers = !this.includeNumbers
  }
  onSymbolsChange(){
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick(){
    console.log(`${this.includeLetters}, ${this.includeNumbers}, ${this.includeSymbols}`);
    
    this.password = 'My Password';
  }
}
