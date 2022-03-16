import React from "react";

import ArtThumbnail from "../components/ArtThumbnail";

import ArtsStyles from "./Arts.style";

import arts from "../assets/arts";

import "./Arts.style.tsx";

const Arts = () => {
  return (
    <ArtsStyles.Grid>
      {arts.map((art) => (
        <ArtThumbnail art={art} key={art.id} />
      ))}
    </ArtsStyles.Grid>
  );
};

export default Arts;
