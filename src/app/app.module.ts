import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { MyPipePipe } from './my-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ListJoueursComponent } from './list-joueurs/list-joueurs.component';
import { HttpClientModule } from '@angular/common/http';
import { JoueursService } from './services/joueurs.service';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    MyPipePipe,
    ListJoueursComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JoueursService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
