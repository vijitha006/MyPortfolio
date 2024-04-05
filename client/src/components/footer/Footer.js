import './Footer.scss'
const Footer=()=>{
    return(
<section className="footer">
<div>&copy; Copyright {new Date().getFullYear()} Vijitha</div>
<div>
<a href="https://github.com/vijitha006/vijitha006.github.io" target="_blank" rel="noreferrer" aria-label='github' className="text-decoration-none"><span className="bi bi-github custom_github" ></span></a>
        <a href="https://www.linkedin.com/in/vijithasanthosh/" target="_blank" rel="noreferrer" aria-label='linkedin' className="text-decoration-none"><span className="bi bi-linkedin custom_linkedin"></span></a>

</div>
</section>
    )
}
export default Footer;