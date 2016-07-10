import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'
@Component({
  selector: 'authors',
  templateUrl: './app/template_build/authors.component.html',
  providers: [AuthorService]
})
export class AuthorsComponent {
  title = "your author here"
  authors
  constructor(authorService: AuthorService){
    this.authors = authorService.getAuthors()
  }
}
