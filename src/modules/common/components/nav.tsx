import Link from "next/link";
import React from "react";
import Button from "./interactive/button";
import css from "styled-jsx/css";
import stylingConfig from "src/stylingConfig";

const styles = css`
    .wrapper {
        padding: 20px 0;
        width: 100%;
        border-bottom: 1px solid ${stylingConfig.white};
        display: flex;
        background-color: ${stylingConfig.ebonyClay}
    }
    .item {
        padding: 0 20px;
    }
    .item:first-child {
        border-right: 1px solid ${stylingConfig.white};
    }
`;

const Nav = () => {
    return (
        <div className="wrapper">
            <div className="item">
                <Link href="/" passHref>
                    <Button purpose="hyper" onClick={() => {}}>Home</Button>
                </Link>
            </div>
            <div className="item">
                <Link href="/bookmarks" passHref>
                    <Button purpose="hyper" onClick={() => {}}>Bookmarks</Button>
                </Link>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Nav;