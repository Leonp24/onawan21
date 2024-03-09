import { Container, Row, Col, Button } from "react-bootstrap";

// import component
import NavbarComponent from "../components/NavbarComponent";
import TempatRekomendasi from "../components/TempatRekomendasi";
import PromoComponent from "../components/PromoComponent";
import TestimoniComponent from "../components/TestimoniComponent";
import MaskapaiComponent from "../components/MaskapaiComponent";
import FooterComponent from "../components/FooterComponent";

const landingPage = () => {
    return (
        <>
            <div className="beranda">
                <div className="hero">
                    <NavbarComponent />
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="deskripsi-hero">
                                    <h1>Terbang kemanapun dengan kenyamanan!</h1>
                                    <p>Pesan tiket sekarang dan mulai pengalaman travelling yang menyenangkan untukmu.</p>
                                    <Button variant="outline-dark">Pesan Sekarang</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <TempatRekomendasi />
                <PromoComponent />
                <TestimoniComponent />
                <MaskapaiComponent />
                <FooterComponent />
            </div>
        </>
    );
}

export default landingPage;