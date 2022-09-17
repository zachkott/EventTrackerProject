import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  list = document.getElementsByClassName('list');
  active = document.getElementsByClassName('list-active');

hoverChange(){
  this.list = this.active;
}


title = 'Artist Academy';

selected: Band | null =null;

newBand = new Band();

bands: Band[]=[];

editBand: Band | null = null;





  constructor(
    private bandService: BandService,
  ) { }




  reload(): void {
    this.bandService.home()

  }

  addBand() {
    this.bandService.create(this.newBand).subscribe({
      next: (result) => {
        console.log(result)
        this.newBand = new Band();
        this.reload();
      },
      error: (prob) => {
        console.error('TodoListHttpComponent.addTodo(): error creating todo:');
        console.error(prob);
      },
    });
  }

  setEditBand() {
    this.editBand = Object.assign({}, this.selected);
  }

  updateBand(updatedBand: Band) {
    this.bandService.update(updatedBand).subscribe({
      next: (result) => {
        this.selected = result;
        this.editBand = null;
        this.reload();
      },
      error: (prob) => {
        console.error('BandListHttpComponent.addBand(): error creating todo:');
        console.error(prob);
      },
    });
  }

  deleteBand(id: number) {
    this.bandService.destroy(id).subscribe({
      next: () => {
        this.reload();
      },
      error: (prob) => {
        console.error('BandListHttpComponent.addBand(): error creating todo:');
        console.error(prob);
      },
    });
  }

  ngOnInit(): void {
  }

}
