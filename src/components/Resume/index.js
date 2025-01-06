import React, { useState } from 'react';
import { Document, Page } from 'react-pdf'
import pdf from '../../assets/AnnMarieOrozcoResume.pdf'

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
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </section >
  );

};

export default Resume;
