import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vibratePlugin: Vibration) {}

  vibrate(){
    this.vibratePlugin.vibrate(5000);
  }

}
