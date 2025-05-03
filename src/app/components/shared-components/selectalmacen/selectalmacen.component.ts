import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-selectalmacen',
  templateUrl: './selectalmacen.component.html',
  styleUrls: ['./selectalmacen.component.scss']
})
export class SelectalmacenComponent implements OnInit {

  almselect = 0;
  titulo = "Seleccione Almacen";

  almacenesSeleccionados = [{
    id: 0,
    clave: '',
    nombre: '',
  }];

  constructor(
    public dialogRef: MatDialogRef<SelectalmacenComponent>,
    public dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public message : string
  ) { 
    const datosiniciales = JSON.parse(this.message);
    this.almselect = datosiniciales.idalmacen;
    this.titulo = datosiniciales.titulo;
  }

  ngOnInit(): void {
    const listaalmacenes = localStorage.getItem('almacenesseleccionados') || "[]";
    this.almacenesSeleccionados = JSON.parse(listaalmacenes);

  }

  closeno() {
    this.dialogRef.close(false);
  }

  closeYes() {
    this.dialogRef.close({almacen: this.almselect});
  }

}
