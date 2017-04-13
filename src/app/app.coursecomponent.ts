import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl : 'app/app.coursecomponent.html'
})
export class CourseComponent {
  name : string = 'Angular';
  topics : string [] = [ "Getting Started", "Directives", "Forms", "Http"];

  addTopic(topic : string):void
  {
     console.log("Adding topic " + topic );
     this.topics.push(topic);
  }
  clearTopics () :void
  {
     // clear all elements from array 
     this.topics.splice(0, this.topics.length);
  }

}


 