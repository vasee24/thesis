import * as React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";

export default function BadgeVisibility() {
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <Badge color="secondary" variant="dot" invisible={invisible}>
        <MailIcon
          onClick={handleBadgeVisibility}
          control={<Switch checked={!invisible} />}
        />
      </Badge>
    </div>
  );
}
