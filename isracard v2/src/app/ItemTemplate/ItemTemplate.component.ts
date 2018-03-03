import { Component, OnInit, Input } from '@angular/core';
import { webApi } from '../http.service';
import { MyResponse } from '../http.service'
@Component({
	selector: 'ItemTemplate',
	templateUrl: 'ItemTemplate.component.html',
	styleUrls: ['./ItemTemplate.component.css'],
	providers: [webApi]
})

export class ItemTemplateComponent {
	@Input() item: any;
	@Input() mode: string;
	
	constructor(private webapi: webApi) { }
	addBookmark_click(data) {// Save data to Session Storage (call to class session)
		let resp: MyResponse;
		let item:any={
			full_name: data.full_name,
			html_url: data.html_url,
			owner: {
				avatar_url:data.owner.avatar_url
			}
		}
		
		this.webapi.postData(item, "Github").subscribe((response) => {
			resp = response;
		})
	
	}
}