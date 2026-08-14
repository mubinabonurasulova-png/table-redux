import React, { useState } from "react";
import Table from "./components/Table";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateUser, addUser } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      city: "",
      profession: "",
    },
    onSubmit: (values) => {
      if (editingId) {
        dispatch(updateUser({ id: editingId, ...values }));
        setEditingId(null);
      } else {
        dispatch(addUser(values));
      }
      formik.resetForm();
    },
  });

  function handleEditUser(user) {
    setEditingId(user.id);
    formik.setValues({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      age: user.age || "",
      email: user.email || "",
      phone: user.phone || "",
      city: user.city || "",
      profession: user.profession || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancel() {
    setEditingId(null);
    formik.resetForm();
  }

  return (
    <div className="p-15 flex-col items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[90vw] max-w-5xl mx-auto flex flex-col gap-6 p-8 rounded-xl shadow-md border border-gray-200 bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="age" className="text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="profession"
              className="text-sm font-medium text-gray-700"
            >
              Profession
            </label>
            <input
              id="profession"
              name="profession"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.profession}
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        <div className="self-end flex gap-3">
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-lg transition"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            {editingId ? "Update" : "Submit"}
          </button>
        </div>
      </form>

      <Table onEdit={handleEditUser} />
    </div>
  );
}

export default App;
