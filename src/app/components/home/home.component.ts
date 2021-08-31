import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({ search: new FormControl('')})

  constructor(private facade: HomeService) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(r => console.log(r))
  }

}
