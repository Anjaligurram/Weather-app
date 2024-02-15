// import './Cont.css';
// import React from "react";


// class Counter extends React.Component {
//     state = { count: 0, name: "", submittedName: "" };

//     OnIncrement = () => {
//         if (this.state.count < 10) {
//             this.setState((prevState) => ({ count: prevState.count + 1 }));
//         } else {
//             alert('Count cannot be increased beyond 10');
//         }
//     };

//     OnDecrement = () => {
//         this.setState((prevState) => ({ count: prevState.count - 1 }));
//     };

//     OnReset = () => {
//         this.setState({ count: 0 });
//     };

//     handleNameChange = (event) => {
//         this.setState({ name: event.target.value });
//     };

//     handleSubmit = () => {
//         this.setState({ submittedName: this.state.name });
//     };

//     render() {
//         const { count, name, submittedName } = this.state;

//         return (
//             <div className="container">
//                 <h1>Count is {count}</h1>
//                 {submittedName && <h1>Name is {submittedName}</h1>}
//                 <div className="button-container">
//                     <button onClick={this.OnIncrement}>Increase</button>
//                     <button onClick={this.OnDecrement}>Decrease</button>
//                     <button onClick={this.OnReset}>Reset</button>
//                 </div>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         value={name}
//                         placeholder="Enter your name"
//                         onChange={this.handleNameChange}
//                     />
//                     <button onClick={this.handleSubmit}>Submit</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Counter;

// import React from "react";
// import './Cont.css';

// class Cont extends React.Component {
//     state = {
//         name: "",
//         email: "",
//         message: "",
//         submittedMessage: ""
//     };

//     handleInputChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = () => {
//         const { name, email, message } = this.state;
//         // You can perform validation or send the form data to a server here

//         // For demonstration purposes, just displaying the submitted message in the component
//         const submittedMessage = `Name: ${name}, Email: ${email}, Message: ${message}`;
//         this.setState({ submittedMessage });
//     };

//     render() {
//         const { name, email, message, submittedMessage } = this.state;

//         return (
//             <div className="contact-container">
//                 <h1>Contact Us</h1>
//                 {submittedMessage && <div className="submitted-message">{submittedMessage}</div>}
//                 <div className="input-container">
//                     <label>Name:</label>
//                     <input type="text" name="name" value={name} onChange={this.handleInputChange} />
//                 </div>
//                 <div className="input-container">
//                     <label>Email:</label>
//                     <input type="email" name="email" value={email} onChange={this.handleInputChange} />
//                 </div>
//                 <div className="input-container">
//                     <label>Message:</label>
//                     <textarea name="message" value={message} onChange={this.handleInputChange} />
//                 </div>
//                 <button onClick={this.handleSubmit}>Submit</button>
//             </div>
//         );
//     }
// }

// export default Cont;







    // <div class="container1">
    //   <span class="big-circle"></span>
    //   <img src="img/shape.png" class="square" alt="" />
    //   <div class="form">
    //     <div class="contact-info">
    //       <h3 class="title">Let's get in touch</h3>
    //       <p class="text">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
    //         dolorum adipisci recusandae praesentium dicta!
    //       </p>

    //       <div class="info">
    //         <div class="information">
    //           <img src="img/location.png" class="icon" alt="" />
    //           <p>92 Cherry Drive Uniondale, NY 11553</p>
    //         </div>
    //         <div class="information">
    //           <img src="img/email.png" class="icon" alt="" />
    //           <p>lorem@ipsum.com</p>
    //         </div>
    //         <div class="information">
    //           <img src="img/phone.png" class="icon" alt="" />
    //           <p>123-456-789</p>
    //         </div>
    //       </div>

    //       <div class="social-media">
    //         <p>Connect with us :</p>
    //         <div class="social-icons">
    //           <a href="#">
    //             <i class="fab fa-facebook-f"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-twitter"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-instagram"></i>
    //           </a>
    //           <a href="#">
    //             <i class="fab fa-linkedin-in"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="contact-form">
    //       <span class="circle one"></span>
    //       <span class="circle two"></span>

    //       {/* <form autocomplete="off">
    //         <h3 class="title">Contact us</h3>
    //         <div >
    //           <input type="text" name="name" class="input" />
    //           <label for="">Username</label>
    //           <span>Username</span><br />
    //         </div>
    //         <div class="input-container1">
    //           <input type="email" name="email" class="input" />
    //           <label for="">Email</label>
    //           <span>Email</span>
    //         </div>
    //         <div class="input-container1">
    //           <input type="tel" name="phone" class="input" />
    //           <label for="">Phone</label>
    //           <span>Phone</span>
    //         </div>
    //         <div class="input-container1 textarea">
    //           <textarea name="message" class="input"></textarea>
    //           <label for="">Message</label>
    //           <span>Message</span>
    //         </div>
    //         <input type="submit" value="Send" class="btn" />
    //       </form> */}
    //       <form action="index.html" autocomplete="off">
    //         <h3 class="title">Contact us</h3>
    //         <div class="input-container">
    //           <input type="text" name="name" class="input" />
    //           <label for="">Username</label>
    //           <span>Username</span><br />
    //         </div>
    //         <div class="input-container">
    //           <input type="email" name="email" class="input" />
    //           <label for="">Email</label>
    //           <span>Email</span>
    //         </div>
    //         <div class="input-container">
    //           <input type="tel" name="phone" class="input" />
    //           <label for="">Phone</label>
    //           <span>Phone</span>
    //         </div>
    //         <div class="input-container textarea">
    //           <textarea name="message" class="input"></textarea>
    //           <label for="">Message</label>
    //           <span>Message</span>
    //         </div>
    //         <input type="submit" value="Send" class="btn" />
    //       </form>
    //     </div>
    //   </div>
    // </div>







    import React from "react";
import "./Cont.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function Cont() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "931ccdae-1072-45df-a3bb-18d93cc3119f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", { method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
   <>
   <Navbar />
   <div class="container1">
      <span class="big-circle"></span>
      <img src="Images/shape.jpg" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="D:\react\myapp\src\Images\location.jpg" class="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div class="information">
              <img src="D:\react\myapp\src\Images\email.jpg" class="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src="D:\react\myapp\src\Images\phone.jpg" class="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form autocomplete="off" action="https://api.web3forms.com/submit" method="POST">
         
            <h3 class="title">Contact us</h3>
            <input type="hidden" name="access_key" value="931ccdae-1072-45df-a3bb-18d93cc3119f" />
            <label for="">Username</label>

            <div class="input-container1">
              
              <input type="text" name="name" class="input" />
          
             
            </div>
            <label for="">Email</label>
            <div class="input-container1">
              <input type="email" name="email" class="input" />
              
              <span>Email</span>
            </div>
            <label for="">Phone</label>
            <div class="input-container1">
              <input type="tel" name="phone" class="input" />
             
              <span>Phone</span>
            </div>
            <label for="">Message</label>
            <div class="input-container1 textarea">
              <textarea name="message" class="input"></textarea>
             
              <span>Message</span>
            </div>
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
      </div>
    </div>

  <Footer />
   </>


  )
}
export default Cont



