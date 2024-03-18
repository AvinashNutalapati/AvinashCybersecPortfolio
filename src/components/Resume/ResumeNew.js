import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/../Assets/Avinash Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      // Set width to your state
      setWidth(window.innerWidth);
    };
    // Add resize listener
    window.addEventListener('resize', resizeListener);

    // Remove listener on cleanup
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const getScale = () => (width > 786 ? 1.2 : 0.6);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Document
          file={pdf}
          className="d-flex flex-column align-items-center"
          loading="Loading resume..."
        >
          {Array.from(new Array(4), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={getScale()} />
          ))}
        </Document>

        <Row style={{ justifyContent: 'center', position: 'relative', marginTop: '20px' }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px' }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
