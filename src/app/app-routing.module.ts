import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamplePdfViewerComponent } from "./example-pdf-viewer/example-pdf-viewer.component";
import { AppLoginComponent } from "./app-login/app-login.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserListComponent } from "./user-list/user-list.component";
import { InformationComponent } from "./information/information.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: AppLoginComponent },
  { path: "info", component: InformationComponent },
  { path: "userlist", component: UserListComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
