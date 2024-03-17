import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";

import { useState } from "react";
import { Container, Modal, Card, Row, Col, Button, Form, Nav } from "react-bootstrap";

import maskapai from "../assets/ic-lionair.png"

const profilPage = () => {
    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // riwayat transaksi
    const [activeKey, setActiveKey] = useState('pending');

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    const renderContent = () => {
        if (activeKey === 'pending') {
            return (
                <Card className="riwayat">
                    <Row>
                        <Col lg={4}>
                            <p>Dari</p>
                            <h5>PALEMBANG</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Ke</p>
                            <h5>JAKARTA</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Maskapai</p>
                            <img src={maskapai} alt="" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={6}>
                            <p>Keberangkatan</p>
                            <h5>Senin, 15 Januari 2024</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Total Pembayaran</p>
                            <h5>IDR 500.000</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <p>Waktu Keberangkatan</p>
                            <h5>07.00 WIB</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Status</p>
                            <h6 className="pending">Belum Bayar</h6>
                        </Col>
                    </Row>
                </Card>
            );
        } else if (activeKey === 'lunas') {
            return (
                <Card className="riwayat">
                    <Row>
                        <Col lg={4}>
                            <p>Dari</p>
                            <h5>PALEMBANG</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Ke</p>
                            <h5>JAKARTA</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Maskapai</p>
                            <img src={maskapai} alt="" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={6}>
                            <p>Keberangkatan</p>
                            <h5>Senin, 15 Januari 2024</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Total Pembayaran</p>
                            <h5>IDR 500.000</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <p>Waktu Keberangkatan</p>
                            <h5>07.00 WIB</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Status</p>
                            <h6 className="lunas">Lunas</h6>
                        </Col>
                    </Row>
                </Card>
            );
        } else if (activeKey === 'selesai') {
            return (
                <Card className="riwayat">
                    <Row>
                        <Col lg={4}>
                            <p>Dari</p>
                            <h5>PALEMBANG</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Ke</p>
                            <h5>JAKARTA</h5>
                        </Col>
                        <Col lg={4}>
                            <p>Maskapai</p>
                            <img src={maskapai} alt="" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={6}>
                            <p>Keberangkatan</p>
                            <h5>Senin, 15 Januari 2024</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Total Pembayaran</p>
                            <h5>IDR 500.000</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <p>Waktu Keberangkatan</p>
                            <h5>07.00 WIB</h5>
                        </Col>
                        <Col lg={6}>
                            <p>Status</p>
                            <h6 className="selesai">Selesai</h6>
                        </Col>
                    </Row>
                </Card>
            );
        }
    }

    return (
        <>
            <div className="profil">
                <NavComponent />
                <Container>
                    <Row>
                        <Col>
                            <h5 className="mt-5 mb-3">Informasi Profil</h5>
                            <Card className="info">
                                <Row>
                                    <Col lg={6}>
                                        <p>Nama Lengkap</p>
                                        <h5>Jhon Doe</h5>
                                        <p>Nomor Telepon</p>
                                        <h5>08123239819328</h5>
                                        <p>Email</p>
                                        <h5>jhon@gmail.com</h5>
                                    </Col>
                                    <Col lg={6} className="opsi">
                                        <Button variant="btn btn-info text-light" onClick={handleShow}> Edit Info</Button>
                                        <Button variant="btn btn-outline-danger" onClick={handleShow}>Keluar Akun</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="transaksi">
                        <Col>
                            <h5>Riwayat Transaksi</h5>
                            <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect}>
                                <Nav.Item>
                                    <Nav.Link eventKey="pending">Belum Bayar</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="lunas">Tiket Tersedia</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="selesai">Selesai</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            {activeKey === "pending" && renderContent()}
                            {activeKey === "lunas" && renderContent()}
                            {activeKey === "selesai" && renderContent()}
                        </Col>
                    </Row>


                </Container>
                <FooterComponent />
            </div>

            {/* modal edit */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nama Lengkap" name="nama"></Form.Control>
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nomor Telepon" name="telpon"></Form.Control>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan Nama Lengkap" name="email"></Form.Control>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default profilPage;