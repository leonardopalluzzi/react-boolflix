export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="icons">
                        <ul className="d-flex footer_list_style">
                            <li><a href=""><i className="bi bi-facebook"></i></a></li>
                            <li><a href=""><i className="bi bi-instagram"></i></a></li>
                            <li><a href=""><i className="bi bi-twitter"></i></a></li>
                            <li><a href=""><i className="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer_lists row row-cols-4">
                        <ul className="footer_list_style">
                            <li><a href="">Audiodescrizione</a></li>
                            <li><a href="">Rapporti con gli invetitori</a></li>
                            <li><a href="">Note legali</a></li>
                            <li><a href="">Preferenze per la pubblicita</a></li>
                        </ul>
                        <ul className="footer_list_style">
                            <li><a href="">Centro assistenza</a></li>
                            <li><a href="">Opportunita di lavoro</a></li>
                            <li><a href="">Preferenze per i cookie</a></li>
                        </ul>
                        <ul className="footer_list_style">
                            <li><a href="">Carte regalo</a></li>
                            <li><a href="">Condizioni di utilizzo</a></li>
                            <li><a href="">Informazioni sull'azienda</a></li>
                        </ul>
                        <ul className="footer_list_style">
                            <li><a href="">Media Center</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Contattaci</a></li>
                        </ul>
                    </div>
                    <div className="lower_footer">
                        <button className="btn btn-transparent">Codice di Servizio</button>
                        <span>&copy; 1997-2025 Boolflix, Inc.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}