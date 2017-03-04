import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qs-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  @Input('title') title: string;
  @Input('description') description: string;
  @Input('value') value: number;
  @Input('icon') icon: string;

  constructor() { }


  ngOnInit() {
  }

}
