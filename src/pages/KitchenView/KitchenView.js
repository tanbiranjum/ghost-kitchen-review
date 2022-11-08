import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { getTokenFromLocalStorage } from "../../utils/utils";

const KitchenView = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const kitchen = useLoaderData();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${getTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({
        content: data.review,
        kitchenId: params.id,
        uid: user.uid,
        userEmail: user.email,
        displayName: user.displayName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...reviews, data.data]);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/reviews/kitchens/${params.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, []);
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {kitchen.data.name}
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <p>{kitchen.data.description}</p>
          </div>
        </a>
      </div>
      {/* Review Section */}
      <div className="flex flex-col max-w-6xl mx-auto p-8 shadow-sm lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <form
            className="flex flex-col w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <textarea
              rows="3"
              placeholder="review..."
              name="review"
              {...register("review", { required: true })}
              className="p-4 rounded-md border outline-none resize-none dark:text-gray-100 dark:bg-gray-900"
            ></textarea>
            <button
              type="submit"
              className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"
            >
              Leave Review
            </button>
          </form>
        </div>
      </div>
      {/* START */}
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Display Name</th>
                <th className="p-3">Review</th>
                <th className="p-3">Due</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {reviews &&
                reviews.map((review) => (
                  <tr
                    key={review._id}
                    className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <td className="p-3">
                      <p>{review.displayName}</p>
                    </td>
                    <td className="p-3">
                      <p>{review.content}</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$15,792</p>
                    </td>
                    <td className="p-3 text-right">
                      {user.uid === review.uid ? (
                        <button className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <span>Delete</span>
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KitchenView;
