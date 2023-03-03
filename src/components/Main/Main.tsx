import React from 'react';
import s from './Main.module.scss'
import BlockOne from "./BlockOne/BlockOne";
import BlockTwo from "./BlockTwo/BlockTwo";
import BlockThree from "./BlockThree/BlockThree";
import BlockFour from "./BlockFour/BlockFour";
import BlockFive from "./BlockFive/BlockFive";

const Main = () => {
    return (
        <main className={s.main}>
            <BlockOne/>
            <BlockTwo/>
            <BlockThree/>
            <BlockFour/>
            <BlockFive/>
        </main>
    );
};

export default Main;