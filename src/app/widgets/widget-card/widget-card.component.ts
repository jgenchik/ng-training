import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from 'src/app/shared/types/widget.type';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.scss']
})
export class WidgetCardComponent implements OnInit {

  @Input()
  widget!: Widget;

  @Output() 
  deleteWidget = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onRequestDelete() {
    this.deleteWidget.next(this.widget.id);
  }

}