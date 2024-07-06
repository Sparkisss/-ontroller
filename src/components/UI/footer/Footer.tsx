import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer >
            <div className={classes.container}>
                <h3>Control app by Igor Siamykin</h3>
                <ul className={classes.listContainer}>
                    <li>Instagram</li>
                    <li>Telegram</li>
                    <li>LinkedIn</li>
                    <li>Viber</li>
                    <li>Gmail</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;