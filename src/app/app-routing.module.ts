import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CommunComponent } from './commun/commun.component';
import { CompteComponent } from './compte/compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatedemandeComponent } from './demande/createdemande/createdemande.component';
import { DemandeDetailsComponent } from './demande/demande-details/demande-details.component';
import { ListdemandeComponent } from './demande/listdemande/listdemande.component';
import { UpdateDemandeComponent } from './demande/update-demande/update-demande.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'createdemande', component: CreatedemandeComponent},
  { path: 'demandelist', component: ListdemandeComponent},
  { path: 'update-demande/:numDemande', component: UpdateDemandeComponent},
  { path: 'demande-details/:numDemande', component: DemandeDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'communboard', component: CommunComponent},
  //{ path: 'refresh', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
