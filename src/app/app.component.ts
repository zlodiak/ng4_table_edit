import { Component, OnInit } from '@angular/core';

import { ParticipantsService } from './services/participants.service';
import { Participant } from './types/participant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private participants: Participant[] = [];
  private GENDERS_ARR: string[] = [];
  private GENDERS: Object = {
    0: 'female',
    1: 'male',
    2: 'android'
  };

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit () {
    this.getParticipants();

    for(let prop in this.GENDERS) {
      if (!this.GENDERS.hasOwnProperty(prop)) continue;
      this.GENDERS_ARR.push(this.GENDERS[prop]);
    }

    console.log(this.GENDERS_ARR);
  }

  private getParticipants() {
    this.participants = this.participantsService.getParticipants();
    console.log(this.participants);
  }

  private changeParticipant(id, col, value) {
    //console.log(id, col, value);
    this.participantsService.changeParticipant(id, col, value);
    this.getParticipants();
  }

  private handlerBlurPosition(id) {
    let val = document.getElementById('val_position_' + id);
    let inp = document.getElementById('inp_position_' + id);
    let newVal = (document.getElementById('inp_position_' + id) as HTMLInputElement).value;

    if (!newVal || newVal.trim().length === 0) {
      alert('Enter value');
    } else {
      this.changeParticipant(id, 'position', newVal.trim());
      val.style.display = 'block';
      inp.style.display = 'none';
    }
  }

  private handlerDblClickPosition(id) {
    let val = document.getElementById('val_position_' + id);
    let inp = document.getElementById('inp_position_' + id);

    val.style.display = 'none';
    inp.style.display = 'block';
    inp.focus();
  }


  private changeCity(id, col, value) {
    //
  }

  private handlerBlurCity(id) {
    //
  }

  private handlerDblClickCity(id) {
    //
  }



}
