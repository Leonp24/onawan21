import FooterComponent from "../components/FooterComponent";
import NavComponent from "../components/NavComponent";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/img-logo.png";
import maskapai from "../assets/ic-lionair.png";

const cetakPage = () => {
    return (
        <>
            <div className="cetak">
                <NavComponent />
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h5 className="mt-5 mb-3">Berikut E-Tiket pesawat yang bisa digunakan</h5>

                            <Card>
                                <Row className="d-flex align-items-center">
                                    <Col lg={6}>
                                        <img src={logo} alt="" />
                                    </Col>
                                    <Col lg="6" className="text-end">
                                        <h5>E-Tiket</h5>
                                    </Col>
                                </Row>

                                <hr />

                                <Row>
                                    <Col lg={3}>
                                        <img src={maskapai} alt="" />
                                    </Col>
                                    <Col lg={3}>
                                        <p>Nama Pemesan</p>
                                        <h6>Jhon Doe</h6>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Tanggal Pemesanan</p>
                                        <h6>Minggu, 14 Januari 2024</h6>
                                    </Col>
                                    <Col lg={3}>
                                        <p>Kode Booking</p>
                                        <h6 className="text-info">JKPL14</h6>
                                    </Col>
                                </Row>

                                <div className="detail-penerbangan">
                                    <table>
                                        <thead>
                                            <th>PENERBANGAN</th>
                                            <th>KEBERANGKATAN</th>
                                            <th>KEDATANGAN</th>
                                        </thead>
                                        <tr>
                                            <td>B 737 Ekonomi C</td>
                                            <td>Senin, 15 Januari 2024 | 07.00 Palembang - Sultan Mahmud Badaruddin II Airport </td>
                                            <td>Senin, 15 Januari 2024 | 09.00 Soekarno Hatta Airport </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="detail-penumpang">
                                    <h6><b>DETAIL PENUMPANG</b></h6>
                                    <table>
                                        <thead>
                                            <th>Nomor</th>
                                            <th>Titel</th>
                                            <th>Nama Penumpang</th>
                                            <th>Jenis Tiket</th>
                                            <th>Nomor Tiket</th>
                                        </thead>
                                        <tr>
                                            <td>1</td>
                                            <td>Tuan</td>
                                            <td>Jhon Doe</td>
                                            <td>Dewasa</td>
                                            <td>1234567890</td>
                                        </tr>
                                    </table>
                                </div>
                            </Card>

                            <div className="opsi mt-3 d-flex align-items-center">
                                <Button variant="btn btn-utama">Download E-Tiket</Button>
                                <Link to="/home" className="ms-3">Ke Beranda</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <FooterComponent />
            </div>
        </>
    );
}

export default cetakPage;