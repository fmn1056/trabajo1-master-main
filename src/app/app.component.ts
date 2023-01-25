import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Weather', url: 'weather', icon: 'cloud'},
    { title: 'winelist', url: 'winelist', icon: 'wine'},
    { title: 'Conversor', url: 'conversor', icon:'cash'}
  ];
  public labels = [];


  constructor(private modalController: ModalController) {
    this.presentSplash();
  }

  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
