import React from "react";
import { Card } from "@mui/material/";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function ListRoomIsolate({ hallList }) {
  const { id } = useParams();
  return (
    <div
      className="startpage"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {hallList
        .filter((a) => a.id === id)
        .map((data) => (
          <Room
            img={data.img}
            Price={data.Price}
            Amenities={data.Amenities}
            id={data.id}
          />
        ))}
      {console.log(hallList)}
    </div>
  );
}
function Room({ img, Price, Amenities, id }) {
  const navigate = useNavigate();
  return (
    <div style={{ width: "500px" }}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "20px",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Amenities}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate(`/listRoom/${id}/payment`)}
            variant="contained"
            color="success"
            size="small"
          >
            Pay Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
