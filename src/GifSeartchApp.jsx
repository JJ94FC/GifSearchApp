import {Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGalery } from "./components/GifGalery";

export const GifSeartchApp = () => {
  const initList = [];
  const [categories, setCategories] = useState(initList);
	const onAddCategori = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", marginBottom: "1rem" }}>
      <Grid container spacing={3}>
        {/* app title */}
        <Grid item xs={12}>
          <Typography variant="h2">Gif Seartch App</Typography>
        </Grid>
        {/* addCategory */}
        <AddCategory onNewCategory={onAddCategori}/>
        {/* gif grid */}
				{
					categories.map((category) => (
						<GifGalery key={category} category={category}/>
					))
				}
      </Grid>
    </Container>
  );
};
