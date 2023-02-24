import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";

export default function BasicButtons() {
  return (
    <Stack direction="row">
      <Button variant="contained">
        Add Funds{" "}
        <Box
          sx={{
            "& > :not(style)": {
              alignItems: "center",
              m: 0.1,
            },
          }}
        >
          <Icon sx={{ color: green[500] }}>add_circle</Icon>
        </Box>
      </Button>
    </Stack>
  );
}
