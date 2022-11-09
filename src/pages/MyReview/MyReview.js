import React, { useContext, useEffect, useState } from "react";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { getTokenFromLocalStorage } from "../../utils/utils";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Lottie from "react-lottie";
import astronutAnimation from "../../assets/astronaut-light-theme.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: astronutAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const MyReview = () => {
  useDocumentTitle("My Review - Ghost Kitchen");
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
        console.log(data);
        setReviews(data.data);
      });
  }, []);

  // TODO - If the user doesn't add any review, the page will show 'No reviews were added' at the middle of the page

  return (
    <div className="max-w-6xl mx-auto mt-4">
      {reviews ? (
        reviews?.map((review) => (
          <Review
            key={review._id}
            review={review}
            reviews={reviews}
            setReviews={setReviews}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center">
          <Lottie options={defaultOptions} height={250} width={250} />
          <p className="text-yellow-500 text-4xl font-bold mt-4">
            Oh! Looks Like it's Empty Space!
          </p>
          <p className="text-base text-violet-700 font-bold">
            No reviews were added.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyReview;
