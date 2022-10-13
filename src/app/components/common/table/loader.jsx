import React from "react";
import spiner from "../../../assets/img/spiners/spinner.gif";
const Loader = () => {
    return (
        <div className="loader">
            <img src={spiner} alt="spiner" className="loader-img"></img>;
        </div>
    );
};
export default Loader;
