import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsistenteService} from './asistente.service';
import { AppComponent } from './app.component';
import { SmileyComponent } from './smiley/smiley.component';

@NgModule({
  declarations: [
    AppComponent,
    SmileyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AsistenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
