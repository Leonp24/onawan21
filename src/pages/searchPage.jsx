import { Container, Row, Col } from "react-bootstrap"

import NavComponent from "../components/NavComponent";
import FooterComponent from "../components/FooterComponent";


const searchPage = () => {
    return (
        <>
            <div className="search">
                <NavComponent />
                <Container>
                    <div className="cari">
                        <Row>
                            <Col lg={3}>
                                <p>Dari</p>
                                <h5>Palembang</h5>
                            </Col>
                            <Col lg={3}>
                                <p>Ke</p>
                                <h5>Jakarta</h5>
                            </Col>
                            <Col lg={3}>
                                <p>Jumlah Penumpang</p>
                                <h5>1 Penumpang</h5>
                            </Col>
                            <Col lg={3}>
                                <p>Dari</p>
                                <h5>Senin, 15 Januari 2024</h5>
                            </Col>
                        </Row>
                    </div>

                    <div className="hasil">
                        <h5 className="mb-3">Pilihan Maskapai Tersedia</h5>
                        <Row className="card-pilihan mb-5">
                            <Col>
                                <img src="../src/assets/ic-lionair.png" alt="" />
                                <Row className="pilihan-maskapai">
                                    <h6>Lion Air</h6>
                                    <Col lg={2}>
                                        <h5>07.00</h5>
                                        <p><small>PLM</small></p>
                                    </Col>
                                    <Col lg={2} className="text-center">
                                        <p><small>2 Jam</small></p>
                                        <hr />
                                        <p><small>Langsung</small></p>
                                    </Col>
                                    <Col lg={2}>
                                        <h5>09.00</h5>
                                        <p><small>JKT</small></p>
                                    </Col>
                                    <Col lg={6} className="biaya">
                                        <h6>Biaya</h6>
                                        <h4>IDR 200.000</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="card-pilihan mb-5">
                            <Col>
                                <img src="../src/assets/ic-citilink.png" alt="" />
                                <Row className="pilihan-maskapai">
                                    <h6>Citilink</h6>
                                    <Col lg={2}>
                                        <h5>08.00</h5>
                                        <p><small>PLM</small></p>
                                    </Col>
                                    <Col lg={2} className="text-center">
                                        <p><small>2 Jam</small></p>
                                        <hr />
                                        <p><small>Langsung</small></p>
                                    </Col>
                                    <Col lg={2}>
                                        <h5>10.00</h5>
                                        <p><small>JKT</small></p>
                                    </Col>
                                    <Col lg={6} className="biaya">
                                        <h6>Biaya</h6>
                                        <h4>IDR 250.000</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="card-pilihan mb-5">
                            <Col>
                                <img src="../src/assets/ic-batikair.png" alt="" />
                                <Row className="pilihan-maskapai">
                                    <h6>Lion Air</h6>
                                    <Col lg={2}>
                                        <h5>09.00</h5>
                                        <p><small>PLM</small></p>
                                    </Col>
                                    <Col lg={2} className="text-center">
                                        <p><small>2 Jam</small></p>
                                        <hr />
                                        <p><small>Langsung</small></p>
                                    </Col>
                                    <Col lg={2}>
                                        <h5>11.00</h5>
                                        <p><small>JKT</small></p>
                                    </Col>
                                    <Col lg={6} className="biaya">
                                        <h6>Biaya</h6>
                                        <h4>IDR 300.000</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Container>
                <FooterComponent/>
            </div>
        </>
    );
}

export default searchPage;