import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGalery = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  /* QUEDA HACER LA GALERIA EN COLUMNAS */

  /* IMPLEMENTAR REACT QUERY */

  return (
    <Grid item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" textAlign={"center"}>
            {isLoading ? "Loading..." : category}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box component={'div'} className="gifGridContainer">
            {images.map((img) => (
              <GifItem title={img.title} url={img.url} key={img.id} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
