import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taktik: FormGroup;

  constructor(private tim:FormBuilder){
    this.createForm();
  }

  createForm(){
    this.taktik=this.tim.group({
      keeper:'',
      player : this.tim.group({
        player1:'',
        player2:'',
        player3:'',
        player4:'',
        player5:'',
        player6:'',
        player7:'',
        player8:'',
        player9:'',
        player10:''
      })
    })
  }


  title = 'app';
}
