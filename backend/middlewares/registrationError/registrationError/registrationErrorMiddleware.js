export const validateUserData = (req, res, next) => {
  const { firstName, lastName, password, email, phoneNumber } = req.body;

  if (!/^[A-Z][a-z]+$/.test(firstName) || !/^[A-Z][a-z]+$/.test(lastName)) {
    return next(
      new Error(
        "First name and last name must start with a capital letter and contain only letters"
      )
    );
  }

  if (!/^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
    return next(
      new Error(
        "Password must contain at least one special character, one uppercase letter, one numeric character, and be at least 8 characters long"
      )
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return next(new Error("Invalid email address"));
  }

  if (typeof phoneNumber !== "string" || phoneNumber.length < 10) {
    return next(
      new Error("Phone number must be a string with at least 10 digits")
    );
  }

  next();
};

export const errorHandler = (err, req, res, next) => {
  //   console.log(err.stack);
  res.status(400).json({ error: err.message });
};
