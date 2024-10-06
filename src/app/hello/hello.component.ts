import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
n3: number=0


 add(n1:string,n2:string): void{
  this.n3= parseInt(n1) + parseInt(n2);
  } 
  sub(n1: string, n2: string): void{
    this.n3 = parseInt(n1) - parseInt(n2);
  }
  multi(n1: string, n2: string): void{
    this.n3 = parseInt(n1) * parseInt(n2);
  }
div(n1: string, n2: string): void{
    this.n3 = parseInt(n1) / parseInt(n2);
  }
}
