import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'



const Viewers = () => {
  return (

    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewer" />
        <video apreload="true" autoPlay muted="true" loop>
          <source loop src="/videos/1564674844-disney.mp4"
            type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewer" />
        <video apreload="true" autoPlay muted="true" loop>
          <source loop src="/videos/1564676714-pixar.mp4"
            type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewer" />
        <video apreload="true" autoPlay muted="true" loop>
          <source loop src="/videos/1564676115-marvel.mp4"
            type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewer" />
        <video apreload="true" autoPlay muted="true" loop>
          <source loop src="/videos/1608229455-star-wars.mp4"
            type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewer" />
        <video apreload="true" autoPlay muted="true" loop>
          <source loop src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items: center;
  padding: 30px 0px 26px;
`;
const Wrap = styled.div`

  margin-top:15px;
  max-width:200px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    display:none;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video{
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    img{
      display:none;
    }

  }
`;
