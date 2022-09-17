import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {




title = 'Artist Academy';

selected: Band | null = null;

newBand = new Band();

bands: Band[]=[];

editBand: Band | null = null;





  constructor(
    private bandService: BandService,
  ) { }




  reload(): void {
    this.bandService.index().subscribe({
      next: (bands) => {
        this.bands = bands;
      },
      error: (problem) => {
        console.error('TodoListHttpComponent.reload(): error loading todo:');
        console.error(problem);
      },
    });

  }

  displayBand(band: Band){
  console.log(band);
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

  displayTable(){
    this.selected  = null;
  }

  ngOnInit(): void {
    this.reload();
  }

}
