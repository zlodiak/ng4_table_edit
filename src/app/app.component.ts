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

  constructor(private participantsService: ParticipantsService) { };

  ngOnInit () {
    this.participantsService.getParticipants().subscribe(
        data => {
          console.log(data);
          let participantsRaw = JSON.parse(data._body);
          let participants: any[] = [];

          for(let prop in participantsRaw) {
            if (!participantsRaw.hasOwnProperty(prop)) continue;
            participants.push(participantsRaw[prop]);
          }

          console.log(participants);
          this.participants = participants;
        },
        err => {
          console.log('err')
        });
  }

}
