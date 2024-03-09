import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Form, Card } from "react-bootstrap";

const infoPage = () => {
    return (
        <>
            <div className="info">
                <NavComponent />
                <div className="detail-info">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <div className="title">
                                    <h5>Detail Pemesan</h5>
                                    <p>Detail ini akan digunakan untuk pengiriman e-tiket.</p>
                                </div>

                                <Card>
                                    <Form>
                                        {['radio'].map((type) => (
                                            <div className="mb-3 radios">
                                                <Form.Check
                                                    type="radio"
                                                    id="radio1"
                                                    name="pilihan"
                                                    label="Tuan"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    id="radio1"
                                                    name="pilihan"
                                                    label="Nyonya"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    id="radio1"
                                                    name="pilihan"
                                                    label="Nona"
                                                />
                                            </div>
                                        ))}

                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" placeholder="Masukkan Nama Lengkap" name="nama"></Form.Control>

                                        <Form.Label>Nomor Telepon</Form.Label>
                                        <Form.Control type="text" placeholder="Masukkan Nomor Telepon" name="telp"></Form.Control>

                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Masukkan Email" name="telp"></Form.Control>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default infoPage;