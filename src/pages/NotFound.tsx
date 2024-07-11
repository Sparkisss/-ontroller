import { FC } from "react";
import { Link } from "react-router-dom"
import errorPage from "../source/img/404-error.png"
import Button from "../components/UI/button/Button";

const NotFound: FC = () => {
    return (
        <div className="errorPage">
            <img src={errorPage} alt="oh yet error" />
            <Button>
                <Link to="/">Back to auth page</Link>
            </Button>            
        </div>
    );
};

export default NotFound;