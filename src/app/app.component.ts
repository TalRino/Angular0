import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bina Loup';

  theNameIsRed:boolean = true;

  displayList:boolean = true;

  songList:string[] = ["HowWeDo", "InDaClub", "HandsUp", "OneNight", "EnDD"];

}
