import { Button, IconButton, Stack, Box } from "@mui/material/";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
export function Add_Room({ i, a, setRoom, room }) {
  const [count, setCount] = useState(0);

  function deletes(i) {
    if (i != 0) {
      var arrcopy = [...room];

      arrcopy.splice(i, 1);
      setRoom(arrcopy);
    }
  }

  return (
    <div>
      <div>
        <div className="Rooms_Guest">
          <div>
            <div></div>
            <div>Room {a}</div>

            {i != 0 && (
              <IconButton onClick={() => deletes(i)}>
                <DisabledByDefaultIcon />
              </IconButton>
            )}
          </div>

          <div style={{ letterSpacing: 5, wordSpacing: 20 }}>PERSON Count</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              disabled={count < 1 ? true : false}
              onClick={() => {
                setCount(count - 1);
              }}
              variant="contained"
              color="error"
            >
              {" "}
              <RemoveCircleOutlineIcon />{" "}
            </Button>

            <span>{count}</span>
            <Button
              disabled={count > 2 ? true : false}
              onClick={() => {
                setCount(count + 1);
                count > 1 && setRoom([...room, room[room.length - 1] + 1]);
              }}
              variant="contained"
              color="error"
            >
              <ControlPointIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
