import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Input from '@/common/components/interactive/input';
import css from "styled-jsx/css";
import Button from '@/common/components/interactive/button';
import axios from 'axios';
import Title from '@/common/components/title';
import Main from '@/common/layouts/main';
import RepoList from '@/common/components/repoList';

// if I had more time:
// - set types for Axios return data and add to state / fetch
// - make list mobile responsive
// - make bookmark button dependant on whether repo is already bookmarked (i.e. 'un-bookmark repo)
// - fix console forwardRef errors for Button component
// - fix Jest jsx error
// - write a whole pile more jest tests

// for this page, to-do: add jest tests to check conditional statements around returned data.
// (mock out axios - return error, empty array, populated array - using react-testing-library check the UI for corresponding divs)

const styles = css`
  .title {
    margin-bottom: 20px;
  }
  .button {
    margin-top: 20px;
  }
  .message {
    margin-top: 20px;
  }
`;

const Home: NextPage = () => {
  // set state to house our user search string
  const [inputValue, setInputValue] = useState("");

  // set state to house our current user's repos
  const [currentUserData, setCurrentUserData] = useState<any>(null);

  // is the search loading?
  const [searchLoading, setSearchLoading] = useState(false);

  // did the search return a 404?
  const [searchError, setSearchError] = useState(false);

  const handleSearch = useCallback(async () => {
    // set UI loading indicator
    setSearchLoading(true);
    // reset error value
    setSearchError(false);
    //perform fetch
    await axios.get(`https://api.github.com/users/${inputValue}/repos`).then(data => {
      // if we have returned data, update our state
      setCurrentUserData(data);
      // turn off our loader
      setSearchLoading(false);
    })
    .catch(err => {
      // if we have an error, update our error state
      setSearchError(true);
      // turn off our loader
      setSearchLoading(false);
    });
  }, [inputValue])

  return (
    <div className="wrapper">
      <main className="body">
        <Main>
          <div className="title">
            <Title text="Ennismore Code Test" subText="Find Github repos for any given user name"/>
          </div>
          <div className="input">
            <Input
              label="Enter user name"
              onChange={(e) => {
                  setInputValue(e.target.value)
                }
              }
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              value={inputValue}
            />
          </div>
          <div className="button">
            <Button onClick={() => {handleSearch()}} loading={searchLoading}>
              Search
            </Button>
          </div>
          <div className="output">
            {searchError && (
              <div className="message">
                User not found.
              </div>
            )}
            {!searchError && currentUserData && currentUserData.data.length === 0 && (
              <div className="message">
                This user has no repos.
              </div>
            )}
            {!searchError && currentUserData && currentUserData.data.length > 0 && (
              <RepoList data={currentUserData.data} />
            )}
          </div>
        </Main>


      </main>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Home;
