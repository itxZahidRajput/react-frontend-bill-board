import React from "react";
import Category from './sections/Category';
import Selections from './sections/Selections';
import Testmonials from './sections/Testmonials';
import Destination from './sections/Destination';
import Section from './sections/Section';
import Trymore from './sections/Trymore';
import "../assets/main.css";
import "../assets/new.css";

export default function Homepage() {
    return (
        <>
            <main>
                <Section />
                <Category />
                <Selections />
                <Destination />
                <Trymore />
                <Testmonials />

            </main>
        </>
    )
}