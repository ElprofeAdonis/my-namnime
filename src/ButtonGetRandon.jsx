import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MyRandon from "./myRandon";
const ButtonGetRandon = () => {
  return (
    <Box
      sx={{
        textAlign: "right",
        padding: "16px",
      }}
    >
      <Button variant="contained" onClick={MyRandon}>
        GET NEW RANDOM ANIME sjdnfkjsjfk
      </Button>
    </Box>
  );
};
export default ButtonGetRandon;
