import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tynass Information Technology';

  constructor(private titleService: Title, private metaService: Meta){

  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Tynass IT,Startup,Augmented Reality,Mixed reality'},
      {name: 'description', content: 'Tynass IT is a Startup that creates innovative solutions using advanced technologies like Augmented reality, Mixed reality.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

}
