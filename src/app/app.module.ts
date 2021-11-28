import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { DirectiveComponent } from './directive/directive.component';

import { ChildComponent } from './child/child.component';
import { CounterComponent } from './child/counter/counter.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddComponent } from './game-control/odd/odd.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectiveComponent,
    ChildComponent,
    CounterComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
