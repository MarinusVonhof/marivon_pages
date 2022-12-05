import Image from 'next/image' // Gebruik image-optimization (bereik 100% performance op Lighthouse)

import imgLogo from '../public/img/marivon_logo_300x125.webp' // gebruik module node-image

import { Form, Card, Dropdown, Alert, Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function Home() {
  return (
    <div>

      <main className="pb-5" style={{ minHeight: "90vh" }}>
        <div className="container-fluid img_homeHead_bg">
          <div className="row pt-5">
            <div className="col-lg-8 col-12 mx-auto text-center">
              <Image src={imgLogo} alt="" />
              <h4 className="my-3"><strong>Ontwerpen en toepassen van databases in het semantisch web</strong></h4>
            </div>
          </div>
        </div>
        <div className="row col-lg-8 col-12 mx-auto">
          <div className="col-lg-4 col-12 mt-4">
            <Card className="bc_card_header text-white" style={{ height: "100%" }}>
              <Card.Header as="h4">Databases</Card.Header>
              <Card.Body className="img_databases_bg">
                <Card.Title />
                <Card.Text>
                  Modelleren van semantische databases - ontologiën - volgens linked data principes.<br /><br />Protocollen en formaten: RDF, RDFS, OWL, SPARQL, SHACL.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-12 mt-4">
            <Card className="bc_card_header text-white" style={{ height: "100%" }}>
              <Card.Header as="h4">Toepassingen</Card.Header>
              <Card.Body className="img_toepassingen_bg">
                <Card.Title />
                <Card.Text>
                  Uitwisselen in allerlei formaten, GIS-koppelingen, digital twins.<br /><br />Softwareontwikkeling in C++, Javascript, Typescript.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-12 mt-4">
            <Card className="bc_card_header text-white" style={{ height: "100%" }}>
              <Card.Header as="h4">Webapplicaties</Card.Header>
              <Card.Body className="img_applicaties_bg">
                <Card.Title />
                <Card.Text>
                  Websites en applicaties (ook API&apos;s) in Node.js, React.js, Next.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row col-lg-8 col-12 mx-auto">
         <div className="col-lg-8 col-12 mx-auto mt-5">
            <strong><i>Welkom</i></strong><br/>
            Met mijn bedrijf marIvon werk ik vooral aan ontwerp, bouw en beheer van linked-data-structuren.
            De opbouw en inhoud daarvan maak ik toegankelijk met de ontwikkeling van websites en webapplicaties.<br />
           <i>Marinus Vonhof</i> {/* <i><div className="row justify-content-center">Marinus Vonhof</div></i> */ }
        </div></div>
      </main >
      <footer className="bc_footer" style={{ minHeight: "10vh" }}>
        Mail: <a className="footer" href="mailto:marinus.vonhof@marivon.nl">marIvon</a><br />Telefoon: +31 622 466 366<br /><br /><i>door marIvon, 8 maart 2022</i>
      </footer>

    </div >
  )
}
