import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent implements OnInit {
  @Output() add = new EventEmitter()
  @Output() remove = new EventEmitter()
  @Input() title: string
  @Input() subtitle: string
  @Input() img: string
  @Input() content: string
  @Input() count: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
