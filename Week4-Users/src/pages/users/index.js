import { useState, useEffect } from "react";
import { fetchUsers } from "../api";
import UserCard from "@/components/Card";
import { Grid } from "@mui/material";
const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const allUsers = await fetchUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid
      container
      spacing={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "10px",
      }}
    >
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <UserCard users={user} showLearnMore={true} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
