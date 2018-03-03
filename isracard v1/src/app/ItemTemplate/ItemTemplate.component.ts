import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../session';
@Component({
	selector: 'ItemTemplate',
	templateUrl: 'ItemTemplate.component.html',
	styleUrls: ['./ItemTemplate.component.css'],
	providers: [Session]
})

export class ItemTemplateComponent {
	@Input() item: any;
	@Input() mode:string;
	constructor(private session: Session) { }
	addBookmark_click(data) {// Save data to Session Storage (call to class session)
		this.session.save(data);
	}
}