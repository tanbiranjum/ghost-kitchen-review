import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { getTokenFromLocalStorage } from "../../utils/utils";
import ReviewUpdateForm from "../ReviewUpdateForm/ReviewUpdateForm";

const Review = ({ review, reviews, setReviews }) => {
  const { user } = useContext(AuthContext);
  const [reviewContent, setReviewContent] = useState(review.content);
  const location = useLocation();

  const handleDeleteReview = (id) => {
    fetch(`https://ghost-kitchen-server.vercel.app/api/v1/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${getTokenFromLocalStorage()}`,
      },
    }).then(() => {
      const newReviews = reviews.filter((review) => review._id !== id);
      setReviews(newReviews);
      toast.success("Deleted sucessfully!", {
        icon: "😸",
      });
    });
  };
  return (
    <article className="p-6 text-base border-t border-gray-700 bg-gray-900">
      <p className="text-sm text-gray-400 mb-1">
        <time pubdate dateTime="2022-03-12" title="March 12th, 2022">
          Mar. 12, 2022
        </time>
      </p>
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-white">
            <img
              referrerpolicy="no-referrer"
              className="mr-2 w-6 h-6 rounded-full"
              src={review.photoURL}
              alt="user image"
            />
            <div className="flex flex-col">
              {review.displayName}
              <p className="text-xs text-yellow-600">{review.userEmail}</p>
            </div>
          </p>
        </div>
        <div className="inline-flex items-center dropdown">
          <label
            tabIndex={review._id}
            className="p-2 text-sm font-medium text-center text-gray-400  rounded-lg focus:ring-4 focus:outline-none bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
            <span className="sr-only">Comment settings</span>
          </label>
          <ul
            tabIndex={review._id}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user?.uid === review.uid && (
              <li>
                <a
                  href="#update-review"
                  className="block py-2 px-4 hover:bg-gray-600 hover:text-white"
                >
                  Edit
                </a>
              </li>
            )}
            {user?.uid === review.uid && (
              <li
                onClick={() => {
                  handleDeleteReview(review._id);
                }}
              >
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-600 hover:text-white"
                >
                  Remove
                </a>
              </li>
            )}
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-600 hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-400">{reviewContent}</p>
      {location.pathname === "/my-reviews" && (
        <p className="text-xs text-blue-700 font-semibold">
          Kitchen Name:{" "}
          <span className="text-yellow-500">{review.kitchenId.name}</span>
        </p>
      )}
      <>
        <div className="modal" id="update-review">
          <div className="modal-box">
            <ReviewUpdateForm
              id={review._id}
              reviewContent={reviewContent}
              setReviewContent={setReviewContent}
            />
            <div className="modal-action">
              <a href="#" className="btn">
                Close
              </a>
            </div>
          </div>
        </div>
      </>
    </article>
  );
};

export default Review;
