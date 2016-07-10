import {Component} from 'angular2/core'
import {CourseService} from './course.service'
@Component({
  selector: 'courses',
  templateUrl: './app/template_build/courses.component.html',
  providers: [CourseService]
})
export class CoursesComponent {
  title = "The title of our course page"
  courses
  constructor(courseService: CourseService){
    this.courses = courseService.getCourses()
  }
}
 
