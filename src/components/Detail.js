import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
const Detail = () => {
  const [show, setShow] = useState();
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get('id')
    console.log(id);

    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setShow(data));
  }, []);
  return (
    <Container>
      <Background>
        {
          show && <img src={show.image.original} />
        }
      </Background>
      <SideMenu>
        <h2>{show && show.name}</h2>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>
          {show && show.genres.map(gen => {
            return (<> {gen}</>)
          })}
        </SubTitle>
        <Description>
          {show && <>{Parser(show.summary)}</>}
        </Description>
      </SideMenu>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const SideMenu = styled.div`
  position: absolute;
  top:0;
  left:0;
  bottom:0;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  padding: 15px;
  background: rgba(9, 11, 19, 0.5);
  max-width: 500px;
  min-height: 100%;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    font-size: 30px;
    color: white;
  }
  margin-right: 16px;
`;
const GroupWatchButton = styled(AddButton)`
  background-color: #000;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 550px;
`;
