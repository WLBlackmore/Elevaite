import logo from '../../assets/logo.png';


const Footer = () => {
    return(
        <section class="footer">
        <div class="footer-flex">
            <div class="line-left"></div>
            <div class="logo">
                <img src={logo} alt="logo"></img>
                <h5>© William Blackmore</h5>
            </div>
            <div class="line-right"></div>
        </div>
    </section>
    )
};

export default Footer;