import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarTop from "../../components/navbar";
import Post from "../../components/post";

const Profile = () => {
    const { id } = useParams();

    return (
        <>
            <NavbarTop />

            <main>
                <Container>
                    <div className="d-flex bg-white rounded-3" style={{ height: '160px' }}>
                        <div className="col col-auto d-flex flex-column">
                            <div className="rounded-circle ms-3 mt-3" style={{ backgroundColor: '#A450CB', width: '120px', height: '120px' }}></div>
                        </div>

                        <div className="col mt-3 ms-2 col-auto d-flex flex-column justify-content-center align-items-center" style={{height: '120px'}}>
                            <p className="m-0">Seguidores: 1354</p>
                        </div>

                        <div className="col mt-3 ms-2 col-auto d-flex flex-column justify-content-center align-items-center" style={{height: '120px'}}>
                            <p className="m-0">Seguindo: 1354</p>
                        </div>
                    </div>

                    <div>

                        <Post
                            username="Matheus"
                            imgUrl="/capa.jpg"
                            description="Ola, eu sou o Matheus e estou procurando um amigo para jogar um jogo de RPG"
                            id={1}
                        />

                    </div>

                </Container>
            </main>
        </>
    )
}

export default Profile;