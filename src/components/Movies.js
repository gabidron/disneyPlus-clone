import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Movies = () => {
  const showsUrl = "https://api.tvmaze.com/shows";
  const [genders, setGenders] = useState([]);
  const [shows, setShows] = useState([]);
  let noOfShows = 0;
  let showsGenders = new Set();
  useEffect(() => {
    fetch(showsUrl)
      .then((res) => res.json())
      .then((data) => {
        setShows([...shows, ...data]);
        data.forEach((element) => {
          element.genres.forEach((gender) => {
            showsGenders.add(gender);
          });
        });
        setGenders(Array.from(showsGenders));
      });
  }, []);

  const history = useHistory();

  return (
    <Container>
      {genders.map((gender) => {
        noOfShows = 0;
        return (
          <ShowsContainer>
            <h4>{gender}</h4>
            <Slider>
              {shows.map((show) => {
                if (show.genres.includes(gender) && noOfShows < 4) {
                  noOfShows++;
                  return (
                    <Wrap
                      onClick={() => {
                        console.log(show);
                        history.push(`/Detail?id=${show.id}`);
                      }}
                    >
                      <img src={show.image.medium} />
                    </Wrap>
                  );
                }
              })}
            </Slider>
          </ShowsContainer>
        );
      })}
    </Container>
  );
};

export default Movies;
const Container = styled.div`
  padding: 12px;
`;
const Slider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;
const Wrap = styled.div`
  margin: 10px 15px;
  min-width: 200px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 20;
  }
`;
const ShowsContainer = styled.div``;
