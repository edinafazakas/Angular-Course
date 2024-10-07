import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent implements AfterContentInit{
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  constructor(){
    afterRender(() =>{
      console.log("after render");
    }
    );

    afterNextRender(() => {
      console.log("after next render")
    })
  }

  ngAfterContentInit(): void {
      //console.log()
  }

  onClick(){
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }

}
