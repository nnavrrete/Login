import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión

    // Simulando un inicio de sesión exitoso
    console.log("Iniciar sesión:", formData);
    
    // Cambiar el estado para redirigir al usuario al "home"
    setRedirectToHome(true);
  };

  // Si redirectToHome es true, redirigir al usuario al "home"
  if (redirectToHome) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
        <p className="mt-3">
          ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;