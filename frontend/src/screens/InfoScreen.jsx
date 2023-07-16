import React from 'react';
import { FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import { Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';

const InfoScreen = () => {
  return (
    <>
      <Card className="my-4">
        <h1 className="m-auto p-4">Info</h1>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p className="px-4">Winkel enkel open op afspraak! </p>
          </ListGroup.Item>

          <ListGroup.Item>
            <p className="px-4">Vragen? artikel niet gevonden?</p>
            <p className="px-4">
              Aarzel dan niet om contact op te nemen! Misschien kunnen we het
              artikel bestellen!
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <h1 className="m-auto p-4">Contact</h1>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <FaPhone></FaPhone> +32 474 66 33 20
          </ListGroup.Item>
          <ListGroup.Item>
            <FaEnvelope></FaEnvelope> REDVIT@outlook.be - Info@rc-redvit.be
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHome></FaHome> Dauwstraat 2B, 9190 Stekene
          </ListGroup.Item>
          <ListGroup.Item>
            Ophalen in winkel - Winkelbezoek op afspraak - Bezorging{' '}
          </ListGroup.Item>
          <ListGroup.Item>BTW Nummer: BE0676.507.296</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default InfoScreen;
