import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DOM-manipulation';
  @ViewChild("test") d:any

ngAfterViewInit(){
  console.log(this.d)
 this.d.nativeElement.onkeyup = ()=>{
  console.log(this.d.nativeElement.value)
 }
}

changeDiv(){
  console.log(this.d.nativeElement.value)
 }
  
  

  

}
