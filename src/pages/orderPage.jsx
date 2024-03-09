import { Container, Row, Col, Form, Button } from "react-bootstrap";

import NavComponent from "../components/NavComponent";
import PromoComponent from "../components/PromoComponent";
import FooterComponent from "../components/FooterComponent";


const orderPage = () => {
    return (
        <>
            <div className="order">
                <div className="hero-order">
                    <NavComponent />
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="deskripsi-hero">
                                    <h1>Cek harga tiket pesawat terbaik!</h1>
                                    <p>Cek harga tiket pesawat ke tujuan yang kamu ingin!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="pesan-tiket">
                    <Container>
                        <Row>
                            <Col>
                                <Form action="/search">
                                    <Row>
                                        <Col lg={10}>
                                            <Row>
                                                <Col lg={3}>
                                                    <Form.Label>Dari</Form.Label>
                                                    <Form.Control type="text" placeholder="Masukkan Kota Asal" required></Form.Control>
                                                </Col>
                                                <Col lg={3}>
                                                    <Form.Label>Ke</Form.Label>
                                                    <Form.Control type="text" placeholder="Masukkan Kota Tujuan" required></Form.Control>
                                                </Col>
                                                <Col lg={3}>
                                                    <Form.Label>Jumlah Penumpang</Form.Label>
                                                    <Form.Control type="number" placeholder="Masukkan Jumlah Penumpang" required></Form.Control>
                                                </Col>
                                                <Col lg={3}>
                                                    <Form.Label>Tanggal Berangkat</Form.Label>
                                                    <Form.Control type="date" required></Form.Control>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={2}>
                                            <Button variant="btn btn-utama" type="submit">Cari Tiket</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <PromoComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default orderPage;