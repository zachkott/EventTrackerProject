import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  selected: Band | null = null;
  newBand = new Band();

  constructor(    private baService: BandService,
    ) { }

  addBand() {
    this.baService.create(this.newBand).subscribe({
      next: (result) => {
        console.log(result)
        this.newBand = new Band();

      },
      error: (prob) => {
        console.error('TodoListHttpComponent.addTodo(): error creating todo:');
        console.error(prob);
      },
    });
  }


  ngOnInit(): void {
  }

}
