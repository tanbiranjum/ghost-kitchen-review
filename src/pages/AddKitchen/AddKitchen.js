import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { getTokenFromLocalStorage } from "../../utils/utils";

const AddKitchen = () => {
  useDocumentTitle("Add Kitchen - Ghost Kitchen");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://ghost-kitchen-server.vercel.app/api/v1/kitchens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `Bearer ${getTokenFromLocalStorage()}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Kitchen added successfully!", {
          icon: "🎉",
        });
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          icon: "😭",
        });
      });
  };
  return (
    <section className="max-w-6xl mx-auto mt-4 bg-gray-800 my-8 text-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-2">
            <p className="text-2xl font-bold text-yellow-600">Ghost Kitchen Information</p>
            <p className="text-sm">
              Please fill out the information below to add a new ghost kitchen
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
            <div className="col-span-full sm:col-span-3">
              <label for="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: true })}
                type="text"
                placeholder="Kitchen name"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="website" className="text-sm">
                Website
              </label>
              <input
                id="website"
                {...register("website", { required: true })}
                type="url"
                placeholder="Website url"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="image" className="text-sm">
                Image
              </label>
              <input
                id="image"
                {...register("image", { required: true })}
                type="text"
                placeholder="image url"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                {...register("address", { required: true })}
                type="text"
                placeholder="your address"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm">
                Price
              </label>
              <input
                id="price"
                {...register("price", { required: true })}
                type="number"
                placeholder="Starting price"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <input
                id="description"
                {...register("description", { required: true })}
                type="text"
                placeholder="description"
                className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-100 outline-none focus:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn justify-end col-span-6 ml-auto bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default AddKitchen;
