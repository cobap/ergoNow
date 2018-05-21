import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormUsuarioDiretoPage } from '../form-usuario-direto/form-usuario-direto';
import { FormUsuarioIndiretoPage } from '../form-usuario-indireto/form-usuario-indireto';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  sistema: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let nome = navParams.get('nome');
    this.sistema.nome = nome;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  form_usuario_indireto() {
    console.log("Iniciando form usuário indireto");
    this.navCtrl.push(FormUsuarioIndiretoPage);
  }

  form_usuario_direto() {
    console.log("Iniciando form usuário indireto");
    this.navCtrl.push(FormUsuarioDiretoPage);
  }

}
