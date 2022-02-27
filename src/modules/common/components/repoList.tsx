import Link from "next/link";
import React from "react";
import Button from "./interactive/button";
import css from "styled-jsx/css";
import stylingConfig from "src/stylingConfig";

const styles = css`
  .wrapper {
    margin-top: 20px;
  }
  .itemRow {
    display: flex;
    width: 100%;
  }
  .head .cell {
    border-bottom: 1px solid ${stylingConfig.white}
  }
  .cell {
    width: 100%;
    max-width: 200px;
    padding: 10px 5px;
  }
  .cell.small {
      max-width: 75px;
  }
  .cell:not(:last-child) {
      border-right: 1px solid ${stylingConfig.white}
  }
`;

// to do - add tests - check data coming in, correct rendered length of mapping

const RepoList = ({data}:{data: any}) => {
    return (
        <div className="wrapper">
            <div className="itemRow head">
                <div className="cell">
                    Repo name:
                </div>
                <div className="cell small">
                    Stars:
                </div>
                <div className="cell small">
                    Forks:
                </div>
                <div className="cell">
                    Language
                </div>
                <div className="cell small" />
            </div>
            {data.map((item: any) => (
                <div className="itemRow"key={item.id}>
                <div className="cell">
                    {item.name}
                </div>
                <div className="cell small">
                    {item.stargazers_count}
                </div>
                <div className="cell small">
                    {item.forks}
                </div>
                <div className="cell">
                    {item.language || "No language found"}
                </div>
                <div className="cell small">
                    <Link href={`/repos/${item.owner.login}/${item.name}`} passHref>
                        <Button purpose="hyper" onClick={() => {}}>Visit</Button>
                    </Link>
                </div>
                </div>
            ))}
            <style jsx>{styles}</style>
        </div>
    )
}

export default RepoList;