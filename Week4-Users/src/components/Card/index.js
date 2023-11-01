import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Link from "next/link";

const UserCard = ({ users, showLearnMore = true }) => {
  return (
    <Grid container spacing={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {users.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {users.email}
          </Typography>
          <Typography variant="body2">
            <br />
            {users.address.street}
          </Typography>
        </CardContent>
        {showLearnMore && (
          <CardActions>
            <Link href={`/users/${users.id}`} key={users.id}>
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default UserCard;
