import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import pdf from '../../assets/AnnMarieOrozcoResume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section className='my-5'>
      <h1>Resume</h1>
      <br></br>
      <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
              )
            })}

        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </section >
  );

};

export default Resume;
