import { FC } from "react";
import { Link } from "react-router-dom"

const NotFound: FC = () => {
    return (
        <div>
            404 Not Found
            <Link to="/">Auth page</Link>
        </div>
    );
};

export default NotFound;