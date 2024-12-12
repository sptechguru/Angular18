import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-dialog',
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {

  // @ViewChild('dynamicContainer', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    console.log('dilog Data', this.data)
  }

  ngOnInit() {
    if (this.data.component) {
      console.log("Dynamic Components", this.data.component)
      // const factory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
      // this.container.createComponent(factory);
    }
  }
  
  

  close() {
    this.dialogRef.close();
  }
}
