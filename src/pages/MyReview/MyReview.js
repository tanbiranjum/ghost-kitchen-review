import React, { useContext, useEffect, useState } from "react";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { getTokenFromLocalStorage } from "../../utils/utils";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/reviews/user/${user.uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, []);

  return (
    <>
      {reviews &&
        reviews?.map((review) => <Review key={review._id} review={review} />)}
    </>
  );
};

export default MyReview;
