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
  private GENDERS: Object = {
    0: 'female',
    1: 'male',
    2: 'android'
  };

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit () {
    this.getParticipants();
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

  private handlerBlurCity(id) {
    let val = document.getElementById('val_city_' + id);
    let inp = document.getElementById('inp_city_' + id);
    let newVal = (document.getElementById('inp_city_' + id) as HTMLInputElement).value;

    this.changeParticipant(id, 'city', newVal)

    val.style.display = 'block';
    inp.style.display = 'none';
  }

  private handlerDblClickCity(id) {
    let val = document.getElementById('val_city_' + id);
    let inp = document.getElementById('inp_city_' + id);

    val.style.display = 'none';
    inp.style.display = 'block';
    inp.focus();
  }

  private handlerClick(event) {
    /*let tagName = event.target.tagName
    let elId = (tagName == 'SPAN') ? event.target.parentElement.id : event.target.id;

    let rowId = elId.split('_')[1];
    let colId = elId.split('_')[2];

    console.log(elId, rowId, colId);

    if (colId == 'id') {
      console.log('rettt');
      return;
    }

    let contentTD = document.getElementById(elId).innerHTML;
    console.log('contentTD', contentTD);*/
  }

}
