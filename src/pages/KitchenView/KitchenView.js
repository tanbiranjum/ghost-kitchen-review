import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import ImageView from "../../components/ImageView/ImageView";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { getTokenFromLocalStorage } from "../../utils/utils";

import { MapPinIcon, AtSymbolIcon, LinkIcon } from "@heroicons/react/20/solid";

const KitchenView = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: kitchen } = useLoaderData();

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
        setReviews([data.data, ...reviews]);
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
        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
          <ImageView src={kitchen.image}>
            <img
              src={kitchen.image}
              alt="image"
              className="object-cover w-full rounded lg:col-span-7 dark:bg-gray-500"
            />
          </ImageView>
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl">
              {kitchen.name}
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <div className="flex gap-1 items-center">
              <AtSymbolIcon className="w-5 h-5 text-violet-700" />
              <p>{kitchen.email}</p>
            </div>
            <div className="flex gap-1 items-center">
              <LinkIcon className="w-5 h-5 text-violet-700" />
              <p>{kitchen.website}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MapPinIcon className="w-5 h-5 text-violet-700" />
              <p>{kitchen.address}</p>
            </div>
            <p>{kitchen.description}</p>
            <p className="text-lg font-bold dark:text-yellow-600">
              Starting from {kitchen.price}$
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Reviews ({(reviews && reviews.length) || 0})
            </h2>
          </div>
          <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="review"
                name="review"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                {...register("review", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="inline-flex border items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post review
            </button>
          </form>
          {reviews &&
            reviews.map((review) => (
              <Review key={review._id} review={review} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default KitchenView;
