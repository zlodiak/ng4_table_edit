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

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit () {
    //this.participantsService.changeParticipant('111', 'fname', 'zorro');
  }

}
