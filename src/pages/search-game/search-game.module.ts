import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchGamePage } from './search-game';

@NgModule({
  declarations: [
    SearchGamePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchGamePage),
  ],
})
export class SearchGamePageModule {}
