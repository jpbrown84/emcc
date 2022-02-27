import React from "react";
import stylingConfig from "src/stylingConfig";
import css from "styled-jsx/css";
import Head from 'next/head';
import Nav from "../components/nav";

const styles = css`
    .wrapper {
    background-color: ${stylingConfig.ebonyClay};
    color: ${stylingConfig.white};
    padding: 20px;
    min-height: 100vh;
  }
`;

const Main = ({children}:{children: any}) => {
    return (
        <>
            <Head>
                <title>Ennismore GitHub</title>
                <meta name="description" content="Ennismore GitHub Code Challengew" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className="wrapper">
                {children}
            <style jsx>{styles}</style>
            </div>
        </>
    )
}

export default Main;