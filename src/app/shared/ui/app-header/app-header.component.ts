import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() brand: string

  constructor() { }

  ngOnInit(): void {
  }

}
