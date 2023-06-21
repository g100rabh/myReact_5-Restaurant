import React from "react";

import mealImg from '../../assets/meal.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    // console.log(classes.header, classes['main-image']);
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Reactmeals</h1>
               <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="A table full of delicious" />
            </div>
        </React.Fragment>
    );
};

export default Header;