import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { EditorsComponent } from './editors/editors.component';
import { SplitterModule } from 'primeng/splitter';
import { EditorModule } from 'primeng/editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponentComponent,
    EditorsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,EditorModule ,
    AppRoutingModule,SplitterModule, NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
