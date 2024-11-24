import foto01 from "../../../assets/img/listarLibros.jpg"
import foto02 from "../../../assets/img/images.jpeg"
import foto03 from "../../../assets/img/images2.jpeg"
export const Acerca = () => {
    return (
        <>
            <div className="d-flex justify-content-around flex-wrap">
                <div className="card" style={{width: "18rem"}}>
                    <img src={foto01} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Listar Libros</h5>
                        <p className="card-text">Aqui puedes encontrar nuestro catalogo de libros.</p>
                        <a href="/liblis" className="btn btn-primary">Ir a listar libros</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={foto02} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Registrar libros</h5>
                        <p className="card-text">Aqui puedes crear tus libros.</p>
                        <a href="/libadm" className="btn btn-primary">Ir a crear libros</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={foto03} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Admin libros</h5>
                        <p className="card-text">Aqui puedes administrar tus libros.</p>
                        <a href="/libadm" className="btn btn-primary">Ir a administrar libros</a>
                    </div>
                </div>
            </div>
        </>
    )
}