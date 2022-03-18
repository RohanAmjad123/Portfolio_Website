import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSpring, animated } from "@react-spring/web";

function Home() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ height: "100vh" }}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <animated.div style={fadeIn}>
          <Grid item>
            <Typography variant="h2">Rohan Amjad</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">Software Engineering, BSc</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              Schulich School of Engineering | University of Calgary
            </Typography>
          </Grid>
        </animated.div>
      </Grid>
    </Container>
  );
}

export default Home;
