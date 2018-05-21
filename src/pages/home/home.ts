import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('inicia_form') inicia_form: any;

  home_form: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.home_form = formBuilder.group({
        name: ['']
    });
  }

  inicia_avaliacao() {
    // this.submitAttempt = true;
    console.log('Iniciando avaliação do sistema: ' + this.home_form.value.name);
    this.navCtrl.push("InicioPage");
  }

}
