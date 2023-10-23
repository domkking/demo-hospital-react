import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "../App.css";

interface cardProps {
  children: string;
  icon: JSX.Element;
  color?: string;
}

export default function ActionAreaCard({ children, icon, color }: cardProps) {
  const style = color ? { color } : {};
  
  const fontStyle : React.CSSProperties = {
    fontFamily: "Poppins, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    textDecoration: "none",
  }

  return (
    <Card
      sx={{
        width: "250px",
        height: "350px",
        borderRadius: "10px",
      }}

      className="animation c"    >
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "350px",
            rowGap: "4em",

            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          {icon}
          <Typography gutterBottom variant="h6" component="div" style={style} sx={fontStyle}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
