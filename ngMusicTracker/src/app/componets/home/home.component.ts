import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private bandService: BandService,
  ) { }


  ngOnInit(): void {
  }



}
