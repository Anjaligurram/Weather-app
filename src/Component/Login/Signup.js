// // Signup.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = ({ onSignup }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // Add signup logic here (e.g., create a new user)
//     // For simplicity, let's assume successful signup
//     onSignup(username);
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleSignup}>
//           Signup
//         </button>
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;
// import { useState } from "react";
// function Signup() {
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Register</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Name</strong>
//             </label>
//             <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0"></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0"></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input type="password" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0"></input>
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Register
//           </button>
//           <p>Already Have an Account</p>
//           <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// };
// export default Signup;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Import the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result =>{ console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  }
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Name</strong>
              </label>
              <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input type="text" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input type="password" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
            </form>
            <p>Already Have an Account</p>
            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Login
            </Link>
          
        </div>
      </div>
    )
  };

export default Signup;

// import React, { useState } from 'react';
// import './Signup.css'; // Import CSS file for styling



// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic form validation
//     const errors = {};
//     if (!formData.username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     }
//     if (!formData.password.trim()) {
//       errors.password = 'Password is required';
//     }

//     if (Object.keys(errors).length === 0) {
//       // You can proceed with form submission
//       console.log('Form submitted:', formData);
//     } else {
//       setErrors(errors);
//     }
//   };

//   return (
//     <div className="center">
//       <div className="whiteBox">
//         <h2>Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="formGroup">
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             {errors.username && <span>{errors.username}</span>}
//           </div>
//           <div className="formGroup">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <span>{errors.email}</span>}
//           </div>
//           <div className="formGroup">
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <span>{errors.password}</span>}
//           </div>
//           <button type="submit">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default Signup;

