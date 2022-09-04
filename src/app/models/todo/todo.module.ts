import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guid } from "guid-typescript";
import { Inject } from '@angular/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
  constructor(
    public id: Guid,
    @Inject(String) public title: string,
    @Inject(Boolean) public isComplete: boolean,
  ){}
}

// export class TodoModule {
//   id: number;
//   title: string;
//   isComplete: boolean;
// }
