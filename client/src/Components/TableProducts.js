import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import connectAxios from "../config/axios";

// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { field: 'ARTICULO', headerName: 'Nombre'},
//     { field: 'PRECIO', headerName: 'Precio'},
//     { field: 'RELEVANCIA', headerName: 'Rating'},
//     { field: 'FOTO', headerName: 'Foto'}
//   ]

//   const rows = [
//       {id: 1,name: 'LA POLLA RECORDS', rating:'' ,price:''},
//       {id: 2,name: '', rating:'' ,price:''},
//       {id: 3,name: '', rating:'' ,price:''},
//       {id: 4,name: '', rating:'' ,price:''},
//       {id: 5,name: '', rating:'' ,price:''},
//       {id: 6,name: '', rating:'' ,price:''},
//       {id: 7,name: '', rating:'' ,price:''},
//       {id: 8,name: '', rating:'' ,price:''},
//       {id: 9,name: '', rating:'' ,price:''},
//       {id: 10,name: '', rating:'' ,price:''},
//       {id: 11,name: '', rating:'' ,price:''},
//       {id: 12,name: '', rating:'' ,price:''},
//       {id: 13,name: '', rating:'' ,price:''},
//       {id: 14,name: '', rating:'' ,price:''},
//       {id: 15,name: '', rating:'' ,price:''}
//   ]

const ProductosTabla = ({ articulos }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });
  const classes = useStyles();
  //meter datos de mongo aquí

  return (
    
    <Fragment>
      <h1>DISCOSLOCOS</h1>
      <input type="text" className="input" placeholder="BUSCA UN GRUPO"/> <br />
      <button onClick={ProductosTabla}>ROCKEA!</button>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://d1r2szwlgvj8r7.cloudfront.net/a2pi/c-fill/q-85/ar-760-864/w-545/images/image_l/20170721110125qlbizl/la-polla-records-cd-en-directo.jpg"
            title="Imagen a capón"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              La Polla Records
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              En Tu Recto
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              Precio: 15€
            </Typography>
            <button>COMPRAR</button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default ProductosTabla;
