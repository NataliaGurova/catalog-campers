import { useState } from "react";
import DatePicker from "react-datepicker";
import css from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "../Icon/Icon";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    bookingDate: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, bookingDate: date });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: false,
      email: false,
      bookingDate: false,
    };

    if (formData.name.trim() === "") {
      newErrors.name = true;
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
      valid = false;
    }

    if (!formData.bookingDate) {
      newErrors.bookingDate = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid! Submitting data:", formData);
      window.location.reload();
    } else {
      console.log("Form is invalid!");
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <div className={css.field}>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? css.error : ""}
            placeholder="Name"
            required
          />
          {errors.name && <span className={css.errorMessage}>Name is required</span>}
        </div>

        <div className={css.field}>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? css.error : ""}
            placeholder="Email"
            required
          />
          {errors.email && (
            <span className={css.errorMessage}>Please enter a valid email</span>
          )}
        </div>

        <div className={css.bookingDateContainer}>
          <DatePicker
            selected={formData.bookingDate}
            onChange={handleDateChange}
            placeholderText="Booking date"
            dateFormat="dd/MM/yyyy"
            className={`${css.bookingDateInput} ${errors.bookingDate ? css.error : ""}`}
            required
          />
          <span className={css.calendarIcon}>
            <Icon id="calendar" width="20" height="20" className={css.icon} />
          </span>
          {errors.bookingDate && (
            <span className={css.errorMessage}>Booking date is required</span>
          )}
        </div>

        <div className={css.field}>
          <textarea
            name="comment"
            id="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Comment"
          />
        </div>

        <button className={css.btnSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;