import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";


export function ColorMap() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Colors Mapping</Card.Title>
        <Badge variant="primary">Very Negative</Badge>
        <Badge variant="dark">Negative</Badge>
        <Badge variant="success">Neutral</Badge>
        <Badge variant="custombtn" >Positive</Badge>
        <Badge variant="success">Very Positive</Badge>
      </Card.Body>
    </Card>
  );
}

export default ColorMap;
