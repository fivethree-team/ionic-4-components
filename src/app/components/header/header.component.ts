import { NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Ionic 4 Components';
  @Input() backbutton = true;

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onTitleClicked() {
    this.navController.navigateRoot('/');
  }

}
