import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters/components/characters-list/characters-list.component';
import { CharacterCardComponent } from './components/characters/components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
