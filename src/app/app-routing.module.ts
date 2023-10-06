import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { EditorsComponent } from './editors/editors.component';

const routes: Routes = [{
  path:'',
  component:UploadComponentComponent
},
{
  path:'edi',
  component:EditorsComponent,
  pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
