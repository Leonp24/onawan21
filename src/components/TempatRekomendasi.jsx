import {Container, Row, Col, Card, Button} from "react-bootstrap";

const TempatRekomendasi = () => {
    return (
        <>
            <div className="tempat-rekomendasi">
                <Container>
                    <h5>Tempat rekomendasi yang kamu suka</h5>
                    <Row className="mt-3">
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/img-rajaAmpat.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Raja Ampat</Card.Title>
                                            <Card.Text>Indonesia</Card.Text>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            <Card.Title className="cost">IDR 200K</Card.Title>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/img-kyoto.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Kyoto</Card.Title>
                                            <Card.Text>Jepang</Card.Text>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            <Card.Title className="cost">IDR 500K</Card.Title>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/img-dubai.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Dubai</Card.Title>
                                            <Card.Text>Uni Emirat Arab</Card.Text>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            <Card.Title className="cost">IDR 900K</Card.Title>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card>
                                <Card.Img variant="top" src="../src/assets/img-paris.png" />
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <Card.Title>Paris</Card.Title>
                                            <Card.Text>Perancis</Card.Text>
                                        </Col>
                                        <Col lg={6}>
                                            <Card.Text>Mulai dari</Card.Text>
                                            <Card.Title className="cost">IDR 1500K</Card.Title>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TempatRekomendasi;