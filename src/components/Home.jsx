import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movie/movieSlice";
import { selectedUserName } from "../features/user/userSlice";
import db from "../firebase";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectedUserName);
  let recommend = [],
    newDisney = [],
    original = [],
    trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case `recommend`:
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;

          case `new`:
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case `original`:
            original = [...original, { id: doc.id, ...doc.data() }];
            break;

          case `trending`:
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(setMovies({ recommend, newDisney, original, trending }));
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
