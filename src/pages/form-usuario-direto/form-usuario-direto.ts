import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-usuario-direto',
  templateUrl: 'form-usuario-direto.html',
})
export class FormUsuarioDiretoPage {

  usuario_direto_form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.usuario_direto_form = formBuilder.group({
        p1: [''],
        p2: [''],
        p3: [''],
        p4: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormUsuarioDiretoPage');
  }

  condition_color(arg1) {
  }

}
