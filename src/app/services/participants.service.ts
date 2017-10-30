import { Injectable } from '@angular/core';


@Injectable()
export class ParticipantsService {

  constructor() { }

  getParticipants() {
    return JSON.parse(localStorage.participants);
  }

  addParticipant(participant) {
    let participants = JSON.parse(localStorage.participants);
    participants.push(participant);
    localStorage.participants(JSON.stringify(participants));
  }

  changeParticipant(id, col, value) {
    let participants = JSON.parse(localStorage.participants);

    participants.forEach((p) => {
      if (p.id == id) {
        console.log(p);
        p[col] = value;
      }
    })
    console.log('participants final', participants);
    localStorage.participants = JSON.stringify(participants);
  }

}
