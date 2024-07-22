import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from "reactstrap";


export default function Tour(props) {
  const { pro} = props;
  return (
    <Col lg={3} md={6} xs={12} className="mb-4">
        <Card>
          <div>
            <img src={pro.img}/>
            <p>12 off</p>
          </div>
          <CardBody>
            <CardSubtitle>{pro.city}</CardSubtitle>
            <CardTitle>{pro.name}</CardTitle>
            <p>{pro.prices}</p>
          </CardBody>
          </Card>
    </Col>
  );
}
