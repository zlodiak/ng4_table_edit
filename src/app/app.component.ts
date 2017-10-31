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
  private GENDERS: string[] = [
    'female',
    'male',
    'android'
  ];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit () {
    this.getParticipants();
  }

  private getParticipants() {
    this.participants = this.participantsService.getParticipants();
    // console.log(this.participants);
  }

  private changeParticipant(id, col, value) {
    // console.log(id, col, value);
    this.participantsService.changeParticipant(id, col, value);
    this.getParticipants();
  }

  private handlerBlurPosition(id) {
    let val = document.getElementById('val_position_' + id);
    let inp = document.getElementById('inp_position_' + id);
    let newVal = (document.getElementById('inp_position_' + id + '_') as HTMLInputElement).value;

    console.log('newVal', newVal);

    if (!newVal || newVal.trim().length === 0) {
      alert('Enter value');
    } else {
      this.changeParticipant(id, 'position', newVal.trim());
      val.style.display = 'block';
      inp.style.display = 'none';
    }
  }

  private handlerDblClickPosition(id) {
    const allVal = <HTMLElement[]><any>document.querySelectorAll('.output-area');
    const allInp = <HTMLElement[]><any>document.querySelectorAll('.input-area');

    allVal.forEach(function (v) {
      v.style.display = 'block';
    });

    allInp.forEach(function (v) {
      v.style.display = 'none';
    });

    let val = document.getElementById('val_position_' + id);
    let inp = document.getElementById('inp_position_' + id);

    val.style.display = 'none';
    inp.style.display = 'block';
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

  private submitName(id) {
    let val = document.getElementById('val_name_' + id);
    let inp = document.getElementById('inp_name_' + id);
    let newFname = (document.getElementById('inp_fname_' + id) as HTMLInputElement).value;
    let newMname = (document.getElementById('inp_mname_' + id) as HTMLInputElement).value;
    let newLname = (document.getElementById('inp_lname_' + id) as HTMLInputElement).value;

    if (!newFname || newFname.trim().length === 0 ||
        !newMname || newMname.trim().length === 0 ||
        !newLname || newLname.trim().length === 0 ) {
      alert('Enter names');
    } else {
      this.changeParticipant(id, 'fname', newFname.trim());
      this.changeParticipant(id, 'mname', newMname.trim());
      this.changeParticipant(id, 'lname', newLname.trim());
      val.style.display = 'block';
      inp.style.display = 'none';
    }
  }

  private handlerDblClickName(id) {
    const allVal = <HTMLElement[]><any>document.querySelectorAll('.output-area');
    const allInp = <HTMLElement[]><any>document.querySelectorAll('.input-area');

    allVal.forEach(function (v) {
      v.style.display = 'block';
    });

    allInp.forEach(function (v) {
      v.style.display = 'none';
    });

    const val = document.getElementById('val_name_' + id);
    const inp = document.getElementById('inp_name_' + id);

    val.style.display = 'none';
    inp.style.display = 'block';
  }

  private marriedToggle(ev, id) {
    // console.log(ev.checked, id);
    this.changeParticipant(id, 'married', ev.checked);
  }

  private changeGender(val, id) {
    // console.log(val, id);
    this.changeParticipant(id, 'gender', val);
  }

}
