import { Component, Input } from '@angular/core'

@Component({
	selector: 'comment',
	template:
	 //fields id, body and postId.
	 //will change the stuff in the {{}} later
		<h3> {{fields id}} </h3>
		<h3> {{post id}} </h3>
		<p> {{body}} </p>

})

export class 