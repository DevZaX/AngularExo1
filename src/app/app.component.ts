import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
	posts:Post[] = [
		new Post('Mon premiere Post',"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"),
		new Post('Mon deuxieme Post',"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"),
		new Post('Mon troisieme Post',"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500")
	]

		
}


class Post {
	constructor(title:string,content:string,loveIts:number,created_at:Date){
		this.title = title
		this.content= content,
		this.loveIts = 0
		this.created_at = new Date()
	}
}
