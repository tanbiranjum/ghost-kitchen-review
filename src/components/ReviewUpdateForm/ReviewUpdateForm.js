import React from "react";
import toast from "react-hot-toast";
import { getTokenFromLocalStorage } from "../../utils/utils";

const ReviewUpdateForm = ({ id, reviewContent, setReviewContent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    fetch(`https://ghost-kitchen-server.vercel.app/api/v1/reviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${getTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({
        content,
      }),
    })
      .then(() => {
        setReviewContent(content);
        toast.success("Updated sucessfully!", {
          icon: "😎",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong", {
            icon: "😭",
        });
      });
  };
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md ml-2 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <p className="text-center dark:text-gray-400">Update your review</p>
      <form
        className="space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div>
            <label for="text" className="block mb-2 text-sm">
              Review
            </label>
            <input
              type="text"
              name="content"
              id="content"
              placeholder={reviewContent}
              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewUpdateForm;
