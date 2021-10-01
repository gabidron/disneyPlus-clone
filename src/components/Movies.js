import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Movies = () => {

  const showsUrl = 'https://api.tvmaze.com/shows';
  const [genders, setGenders] = useState([]);
  const [shows, setShows] = useState([]);
  let showsGenders = new Set();
  useEffect(() => {
    fetch(showsUrl)
      .then(res => res.json())
      .then(data => {

        setShows([...shows, ...data])
        data.forEach(element => {

          element.genres.forEach(gender => {
            showsGenders.add(gender);
          })
        });

        //setUniqueCategories([...new Set(categories)]);

        setGenders(Array.from(showsGenders));
      })

  }, [])

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://m.media-amazon.com/images/M/MV5BZDI4ODJlNGUtNjFiMy00ODgzLWIzYjgtMzgyZTljZDQ2NGZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
      {genders.map(gender => {

        return (
          <ShowsContainer>
            <h4>{gender}</h4>
            <Content>
              {
                shows.map(show => {
                  if (show.genres.includes(gender)) {
                    return (
                      <Wrap>
                        <img src={show.image.medium} />
                      </Wrap>
                    )
                  }
                })
              }
            </Content>
          </ShowsContainer>)
      })
      }
    </Container>
  );
};

export default Movies;
const Container = styled.div`
            padding: 12px;
            `;
const Content = styled.div`
            display: grid;
            grid-gap: 25px;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            `;
const Wrap = styled.div`
            cursor: pointer;
            border-radius: 10px;
            overflow: hidden;
            border: 3px solid rgba(249, 249, 249, 0.1);
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

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
  }
            `;
const ShowsContainer = styled.div``;
