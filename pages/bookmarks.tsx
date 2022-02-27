import Button from "@/common/components/interactive/button";
import Title from "@/common/components/title";
import Main from "@/common/layouts/main";
import Link from "next/link";
import React from "react";
import stylingConfig from "src/stylingConfig";
import css from "styled-jsx/css";

const styles = css`
    .title {
        margin-bottom: 20px;
    }
    .bookmark {
        margin-bottom: 20px;
    }
    .info {
        margin-bottom: 10px;
    }
    .strong {
        font-weight: 700;
    }
    .divider {
        width: 200px;
        height: 1px;
        background-color: ${stylingConfig.white};
    }
`

const Bookmarks = () => {
    // pull current bookmarks from localStorage
    const bookmarks = typeof window !== "undefined" && localStorage && localStorage.bookmarks && JSON.parse(localStorage.bookmarks);

    return (
        <Main>
            <div className="title">
                <Title text="Bookmarks" />
            </div>
            {!bookmarks ? (
                <div>
                    You don&#39;t currently have any bookmarks
                </div>
            ) : (
                <div className="bookmarks">
                    {bookmarks.map((bookmark: {id: string; name: string; owner: string;}) => (
                        <div className="bookmark" key={bookmark.id}>
                            <div className="info">
                               <span className="strong">Name:</span> {bookmark.name}
                            </div>
                            <div className="info">
                               <span className="strong">Owner:</span> {bookmark.owner}
                            </div>
                            <div className="info">
                                <Link href={`/repos/${bookmark.owner}/${bookmark.name}`} passHref>
                                    <Button purpose="hyper" onClick={() => {}}>Visit</Button>
                                </Link>
                            </div>
                            <div className="divider" />
                        </div>
                    ))}
                </div>
            )}
            <style jsx>{styles}</style>
        </Main>
    )
}

export default Bookmarks;