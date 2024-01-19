import packageJson from '../../package.json';

import "../styles/Footer.scss";

function Footer(){
    const currentYear = new Date().getFullYear();

    const contributors = packageJson.contributors || [];
    const contributorNames = contributors.join(', ');
    console.log(contributorNames);

    return(
        <footer>
            <p>&copy; {currentYear} -  Developed by {contributorNames}</p>
            <a href="https://github.com/akbcit/News-App">View the code<img src="images/GitHub-logo.png" id="footer-github-icon" alt="Footer github icon"/></a>
        </footer>
    )
}

export default Footer;