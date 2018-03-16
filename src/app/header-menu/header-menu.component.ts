import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  @Input() yolo: string;
  @Output() yoloChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
