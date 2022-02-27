import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import Button from "@/common/components/interactive/button";
import Main from "@/common/layouts/main";
import Title from "@/common/components/title";
import css from "styled-jsx/css"

const styles = css`
    .title {
        margin-bottom: 20px;
    }
    .bookmark {
        margin-top: 20px;
    }
    .strong {
        font-weight: 700;
    }
    .info {
        margin-bottom: 10px;
    }
`;

const Repo = () => {
    // grab our repo details from the url
    const router = useRouter();
    const name = router.query.name;
    const owner = router.query.owner;

    const [repoData, setRepoData] = useState<any>(null);
    const [repoError, setRepoError] = useState(false);
    const [loading, setLoading] = useState(false);

    // if we have a repo name and owner, fetch the relevant repo data
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await axios.get(`https://api.github.com/repos/${owner}/${name}`).then(data => {
                // if we have returned data, update our state
                setRepoData(data);
                setLoading(false);
              })
              .catch(err => {
                // if we have an error, update our error state
                setRepoError(true);
                setLoading(false);
              });
        }
        if (name && owner && !repoData) {
            getData();
        }
    }, [name, owner, repoData])

    return (
        <Main>
            <div className="title">
                <Title text="Repo information" />
            </div>
            {loading && (
                <div>
                    Loading...
                </div>
            )}
            {repoError && (
                <div>
                    No repo found.
                </div>
            )}
            {!repoError && repoData && (
                <>
                    <div className="data">
                        <div className="info">
                            <span className="strong">Name:</span> {repoData.data.name}
                        </div>
                        <div className="info">
                        <span className="strong">Description:</span> {repoData.data.description && repoData.data.description !== "" ? repoData.data.description : "No description found"}
                        </div>
                        <div className="info">
                        <span className="strong">License:</span> {repoData.data.license && repoData.data.license.name ? repoData.data.license.name : "No license found"}
                        </div>
                    </div>
                    <div className="bookmark">
                        <Button onClick={() => {
                            // if we already have bookmarks in localStorage
                            if (localStorage.bookmarks) {
                                // if this repo is already bookmarked, return
                                const bookmarks = JSON.parse(localStorage.bookmarks);
                                const pageRepoId = `${owner}-${name}`;
                                if (bookmarks.filter((bookmark: any) => (bookmark.id === pageRepoId)).length > 0) {
                                    return;
                                }
                                // if not, add our bookmarks to the array in localStorage
                                bookmarks.push({id: `${owner}-${name}` ,name, owner});
                                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                                return;
                            }
                            // if we don't already have bookmarks, set our first bookmark as part of an array
                            localStorage.setItem("bookmarks", JSON.stringify([{id: `${owner}-${name}` ,name, owner}]));
                        }}>
                            Bookmark Repo
                        </Button>
                    </div>
                </>
            )}
            <style jsx>{styles}</style>
        </Main>
    )
}

export default Repo;