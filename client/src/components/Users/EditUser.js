import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [user, setUser] = useState();
  const { UserId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/user/getById/${UserId}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [user]);
  return <div>{console.log(user.data)}</div>;
};
export default EditUser;
