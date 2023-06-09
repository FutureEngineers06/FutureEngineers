import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //llenar
import {MatTableModule} from '@angular/material/table';
import { SimulationComponent } from './components/simulation/simulation.component';
import { SimulationListarComponent } from './components/simulation/simulation-listar/simulation-listar.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SimulationCreaeditaComponent } from './components/simulation/simulation-creaedita/simulation-creaedita.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { StudentComponent } from './components/student/student.component';
import { StudentListarComponent } from './components/student/student-listar/student-listar.component';
import { StudentCreaeditaComponent } from './components/student/student-creaedita/student-creaedita.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UsersComponent } from './components/users/users.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ListChatsComponent } from './components/chats/list-chats/list-chats.component';
import { DialogoUsersComponent } from './components/users/list-users/dialogo-users/dialogo-users.component';
import { SimulationDialogoComponent } from './components/simulation/simulation-listar/simulation-dialogo/simulation-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MembershipsComponent } from './components/memberships/memberships.component';
import { ListMembershipsComponent } from './components/memberships/list-memberships/list-memberships.component';
import { CreaeditaMembershipsComponent } from './components/memberships/creaedita-memberships/creaedita-memberships.component';
import { DialogoMembershipsComponent } from './components/memberships/list-memberships/dialogo-memberships/dialogo-memberships.component';
import { CreaeditaChatsComponent } from './components/chats/creaedita-chats/creaedita-chats.component';
import { DialogoChatsComponent } from './components/chats/list-chats/dialogo-chats/dialogo-chats.component';
import { StudentDialogoComponent } from './components/student/student-listar/student-dialogo/student-dialogo.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TestsComponent } from './components/tests/tests.component';
import { ExamsComponent } from './components/exams/exams.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { ListTestsComponent } from './components/tests/list-tests/list-tests.component';
import { CreaeditaTestsComponent } from './components/tests/creaedita-tests/creaedita-tests.component';
import { DialogoTestsComponent } from './components/tests/list-tests/dialogo-tests/dialogo-tests.component';
import { ListExamsComponent } from './components/exams/list-exams/list-exams.component';
import { DialogoExamsComponent } from './components/exams/list-exams/dialogo-exams/dialogo-exams.component';
import { CreaeditaExamsComponent } from './components/exams/creaedita-exams/creaedita-exams.component';
import { ListProfessionsComponent } from './components/professions/list-professions/list-professions.component';
import { DialogoProfessionsComponent } from './components/professions/list-professions/dialogo-professions/dialogo-professions.component';
import { CreaeditaProfessionsComponent } from './components/professions/creaedita-professions/creaedita-professions.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ListRoomsComponent } from './components/rooms/list-rooms/list-rooms.component';
import { DialogoRoomsComponent } from './components/rooms/list-rooms/dialogo-rooms/dialogo-rooms.component';
import { CreaeditaRoomsComponent } from './components/rooms/creaedita-rooms/creaedita-rooms.component';
import { MatSelectModule } from '@angular/material/select';
import { TutorsComponent } from './components/tutors/tutors.component';
import { ListTutorsComponent } from './components/tutors/list-tutors/list-tutors.component';
import { CreaeditaTutorsComponent } from './components/tutors/creaedita-tutors/creaedita-tutors.component';
import { DialogoTutorsComponent } from './components/tutors/list-tutors/dialogo-tutors/dialogo-tutors.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { Reporte01Component } from './components/reportes/reporte01/reporte01.component';
import { Reporte02Component } from './components/reportes/reporte02/reporte02.component';
import { Reporte03Component } from './components/reportes/reporte03/reporte03.component';
import { Reporte04Component } from './components/reportes/reporte04/reporte04.component';///////////////true or false -modulo angular material boleano para Rooms


@NgModule({
  declarations: [
    AppComponent,
    SimulationComponent,
    SimulationListarComponent,
    NavbarComponent,
    SimulationCreaeditaComponent,
    StudentComponent,
    StudentListarComponent,
    StudentCreaeditaComponent,
    UsersComponent,
    ListUsersComponent,
    CreaeditaUsersComponent,
    ChatsComponent,
    ListChatsComponent,
    DialogoUsersComponent,
    SimulationDialogoComponent,
    MembershipsComponent,
    ListMembershipsComponent,
    CreaeditaMembershipsComponent,
    DialogoMembershipsComponent,
    CreaeditaChatsComponent,
    DialogoChatsComponent,
    StudentDialogoComponent,
    TestsComponent,
    ExamsComponent,
    ProfessionsComponent,
    ListTestsComponent,
    CreaeditaTestsComponent,
    DialogoTestsComponent,
    ListExamsComponent,
    DialogoExamsComponent,
    CreaeditaExamsComponent,
    ListProfessionsComponent,
    DialogoProfessionsComponent,
    CreaeditaProfessionsComponent,
    RoomsComponent,
    ListRoomsComponent,
    DialogoRoomsComponent,
    CreaeditaRoomsComponent,
    TutorsComponent,
    ListTutorsComponent,
    CreaeditaTutorsComponent,
    DialogoTutorsComponent,
    ReportesComponent,
    Reporte01Component,
    Reporte02Component,
    Reporte03Component,
    Reporte04Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSelectModule,//////////////////

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
