import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./Ui.css";
import { color } from "@mui/system";

const Ui = () => {
  return (
    <div className="Ui">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid>
          <Stack
            sx={{
              width: 500,
              maxWidth: "100%",
              marginTop: 10,
            }}
            autoComplete="off"
          >
            <Typography
              className="typography"
              variant="h4"
              component="h2"
              textAlign={"right"}
            >
              22
              <Divider
                sx={{
                  margin: "0 50px  !important",
                  background: "#919aa5",
                }}
              />
            </Typography>

            <TextField
              className="ui_inputfield"
              variant="standard"
              type="number"
            />

            <Grid>
              <ButtonGroup className="ui_btngroup" variant="string" fullWidth>
                <Button sx={{ color: "red !important" }}>C</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>
                  <p>
                    x<sup>2</sup>
                  </p>
                </Button>
                <Button sx={{ color: "#aeb3ba !important" }}>%</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>/</Button>
              </ButtonGroup>

              <ButtonGroup className="ui_btngroup" variant="string" fullWidth>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>X</Button>
              </ButtonGroup>

              <ButtonGroup className="ui_btngroup" variant="string" fullWidth>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>-</Button>
              </ButtonGroup>

              <ButtonGroup className="ui_btngroup" variant="string" fullWidth>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>+</Button>
              </ButtonGroup>

              <ButtonGroup className="ui_btngroup" variant="string" fullWidth>
                <Button>.</Button>
                <Button>0</Button>
                <Button>√</Button>
                <Button sx={{ color: "#aeb3ba !important" }}>=</Button>
              </ButtonGroup>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ui;
