import { Component } from '@angular/core';
import {AsistenteService} from '../asistente.service';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.scss']
})
export class SmileyComponent {
  emoji = '😀';
  text: string = '';
  constructor(private asis: AsistenteService){
  }

  changeEmoji(){
    this.emoji = this.emoji === '😂' ? '😀' : '😂';
    this.text = '----------';
    this.asis.dimeAlgo();

  }
  handleChange(str){
    this.text = str;

  }


}
