import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { InicioPage } from '../pages/inicio/inicio';
import { InicioPageModule } from '../pages/inicio/inicio.module'
import { FormUsuarioDiretoPageModule } from '../pages/form-usuario-direto/form-usuario-direto.module'
import { FormUsuarioIndiretoPageModule } from '../pages/form-usuario-indireto/form-usuario-indireto.module'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InicioPageModule,
    FormUsuarioDiretoPageModule,
    FormUsuarioIndiretoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
