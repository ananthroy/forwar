import { Component } from '@angular/core';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.css']
})
export class EditorsComponent {
text:string=''
ngAfterViewInit() {
  // Access the iframe element
  const iframe = document.getElementById('officeDocument') as HTMLIFrameElement;

  // Wait for the iframe to load its content
  iframe.onload = () => {
    // Access the document inside the iframe
    const iframeDoc = iframe.contentDocument;

    if (iframeDoc) {
      // Extract text from the document
      const text = iframeDoc.body.innerText;
      console.log('Extracted text:', text);

      // Now you can use 'text' as needed in your Angular component
    } else {
      console.error('Unable to access iframe content document.');
      // Handle the error or provide a fallback behavior
    }
  };
}
}
