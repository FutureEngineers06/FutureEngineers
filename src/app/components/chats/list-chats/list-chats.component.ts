import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
//import { MAR } from '@angular/material';
import { Chats } from 'src/app/model/Chats';
import { ChatsService } from 'src/app/services/chats.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-chats',
  templateUrl: './list-chats.component.html',
  styleUrls: ['./list-chats.component.css']
})
export class ListChatsComponent implements OnInit {
  dataSource:MatTableDataSource<Chats>=new MatTableDataSource();
  lista: Chats[] = []
  idMayor: number = 0
  displayedColumns:String[]=['Codigo','Mensajedelalumno','Mensajedeltutor','fechadeenvio','fechaderecepcion']
  constructor(private as:ChatsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.as.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.as.getList().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    })
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  // confirm(id: number) {
  //   this.idMayor = id;
  //   this.dialog.open(ChatsDialogoComponent);
  // }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}


