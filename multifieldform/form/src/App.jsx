import React from "react";
import useForm from "./useForm";
import validate from "./validate";
import "./App.css";

function App() {

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };

  const { values, errors, handleChange, handleSubmit } =
    useForm(initialValues, validate);

  return (
    <div className="container">
      <div className="form-card">
        <h2>📋 Registration Form</h2>
        <p className="subtitle">Fill in the details below to register</p>

        <form onSubmit={handleSubmit}>

          {/* Name Field */}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Min. 6 characters"
              value={values.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default App;
