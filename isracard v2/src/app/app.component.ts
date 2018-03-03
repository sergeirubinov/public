import { Component } from '@angular/core';
import { webApi } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [webApi]

})
export class AppComponent {

  searchText: string = '';
  dataFromGitHub: any;
  mode: string;
  title = 'app';

  constructor(private webApi: webApi) { } //set cunstructor for connect to class githaub and session

  Keydown(event) {
    if (event.keyCode == 13)
      this.Search_Click();
  }

  Search_Click() {// Press to search button
    this.mode = "search";
    this.loadData(this.searchText);// call to function for get data from github
  }
  BookMark_Click() {
    let data: any//=  this.session.get() ;
    this.webApi.getData("GetBookmark",'').subscribe(data =>
    {
      if (data == null) {
        alert('You do not have bookmark');
        return;
      }
      this.mode = "bookmark";// set mode for show or not show button "Add to Bookmark"
      let result:any={items:data};
      this.fillScreen(result);
    }
    
    
    );
   
   
   
    
  }
  loadData(searchParam: string) {
    // if i get data go to fill screen and itemTempale component
    this.webApi.getData("GetGitHub",searchParam).subscribe(data => this.fillScreen(data));
  }
  fillScreen(data: any) {
    this.dataFromGitHub = data;
  }
}
