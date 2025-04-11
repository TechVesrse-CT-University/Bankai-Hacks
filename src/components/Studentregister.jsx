import React, { useState } from "react";
import "./StudentRegister.css"; 

export default function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    branch: "",
    semester: "",
    mode: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.semester) newErrors.semester = "Semester is required";
    if (!formData.mode) newErrors.mode = "Select mode of study";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
          alert("Registered Successfully!");
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            branch: "",
            semester: "",
            mode: "",
          });
        } else {
          alert(result.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </label>

        <label>
          Branch:
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
          {errors.branch && <span className="error">{errors.branch}</span>}
        </label>

        <label>
          Semester:
          <input type="number" name="semester" value={formData.semester} onChange={handleChange} />
          {errors.semester && <span className="error">{errors.semester}</span>}
        </label>

        <label>
          Mode of Study:
          <select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Dayscholar">Dayscholar</option>
            <option value="Hosteller">Hosteller</option>
          </select>
          {errors.mode && <span className="error">{errors.mode}</span>}
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
