import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadApplicationComponent } from './components/download-application/download-application.component';
import { DownlaodComponent } from './views/downlaod/downlaod.component';
import { MainComponent } from './views/main/main.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { TeamComponent } from './views/team/team.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "team", component: TeamComponent },
  { path: "download", component: DownlaodComponent },
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "downloaad", component: DownloadApplicationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
