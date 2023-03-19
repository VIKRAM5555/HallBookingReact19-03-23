import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function GetStarted() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/StartPage");
  };
  return (
    <div>
      <div className="page">
        <div className="startpage App">
          <div
            style={{
              position: "absolute",
              left: "45%",
              bottom: "20%",
            }}
            className="startpageContent"
          >
            <Paper
              elevation={20}
              sx={{ padding: 2 }}
              style={{
                position: "absolute",
                left: "-38%",
                bottom: "20%",
                backgroundColor: "transparent",
                width: "fit-content",
                height: "fit-content",
                color: "silver",
                borderRadius: "60px",
              }}
            >
              <img
                src={
                  "https://i.pinimg.com/originals/ac/a4/e3/aca4e3c9f73344ec8fd7d16ad0324d97.jpg"
                }
                className="App-logo"
                alt="logo"
              />
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  letterSpacing: "10px",
                }}
              >
                gaikan Rooms
              </Typography>
              <Typography
                variant="h4"
                style={{
                  color: "black",
                  letterSpacing: "10px",
                }}
              >
                A successful event begins
              </Typography>
              <Typography variant="h1"> with a well-chosen venue</Typography>
            </Paper>
          </div>
          <div
            style={{
              position: "absolute",
              left: "45%",
              bottom: "-20%",
            }}
            className="startpageContent"
          >
            <Button
              onClick={handleClick}
              className="Stack"
              sx={{
                width: "auto",
                height: "25%",
                textTransform: "capitalize",
                fontFamily: "monospace",
                letterSpacing: "5px",
                borderRadius: "20px",
                backgroundColor: "rgba(11, 36, 42, 0.993)",
              }}
              variant="contained"
              color="success"
            >
              <h2> Get Started</h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
