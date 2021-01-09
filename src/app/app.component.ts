import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = "";

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
