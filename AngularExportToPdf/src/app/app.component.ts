import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularExportToPdf';

  generatePdf(){
    const documentDefinition = { content  :'Este es un ejecicio exportando a pdf'};
    pdfMake.createPdf(documentDefinition).download();
  }
}
