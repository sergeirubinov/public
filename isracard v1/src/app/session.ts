import { Injectable } from '@angular/core';

@Injectable()
export class Session {

    save(item: any) {//function for save item to Session Storage
        let bookmark: {items:any};
        let  items:any=[];
        if (sessionStorage.getItem("bookmark") != null)
           { 
               bookmark = JSON.parse(sessionStorage.getItem("bookmark"));
               items=bookmark.items;
           }
        items.push(item);
        bookmark={items:items};
        sessionStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    get() { // function for get from Session Storage
        if (sessionStorage.getItem("bookmark") != null) {
            return JSON.parse(sessionStorage.getItem("bookmark"));
        }
        return null;
    }

}