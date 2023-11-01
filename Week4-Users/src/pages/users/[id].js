import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import UserCard from "@/components/Card";
import { fetchUser } from "../api";
import { Grid } from "@mui/material";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const getUser = async () => {
        const userDetail = await fetchUser(id);
        setUser(userDetail);
      };
      getUser();
    }
  }, [id]);
  if (!user) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <UserCard users={user} showLearnMore={false} />
      </Grid>
    </Grid>
  );
};

export default UserDetail;
