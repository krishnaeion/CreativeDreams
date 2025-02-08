import { CommonModule } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent implements OnInit{
myElement: any;
ngOnInit(): void {
  
}
onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form Submitted!', form.value);
  } else {
    console.log('Form is invalid.');
  }
}
ngOnChanges(changes: SimpleChanges){
  
}
ngDoCheck(): void {
  console.log('Change detection cycle');
}
ngAfterContentInit(): void {
  console.log('Content initialized');
}
ngAfterContentChecked(): void {
  console.log('Content checked');
}
ngAfterViewInit(): void {
  //console.log('View initialized', this.myElement?.nativeElement);
}
}
