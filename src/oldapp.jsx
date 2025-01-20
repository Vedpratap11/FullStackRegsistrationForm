// import { useState } from "react"

// function App() {
//   const [formElements , SetFormElements] = useState(
//     {
//      name:"",
//      email:"",
//      phone:"",
//      dob:"",
//      image:"",
//      parent:"",
//      parentPhone:"",
//      localAddress:"",
//      permanentAddress:"",

//     }
//   )


//   return (
//     <>
//       <form className="p-2" encType="multipart/form-data">
//         <div className="p-3">
//           <div className="w-full bg-gray-400 p-2">Personal Information</div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Name</p>
//             <input type="text" name="name" placeholder="Enter Your Full Name" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3">
//             <p className="w-36">Email</p>
//             <input type="email" name="email" placeholder="Enter Your Email Address" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3">
//             <p className="w-36">Phone</p>
//             <input type="text" name="phone" placeholder="Enter Your Phone Number" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3">
//             <p className="w-36">Date of birth</p>
//             <input type="date" name="dob" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3">
//             <p className="w-36">Gender</p>
//             <input type="radio" /><label htmlFor="Male">Male</label>
//             <input type="radio" /><label htmlFor="Female">Female</label>
//             <input type="radio" /><label htmlFor="Others">Others</label>
//           </div>
//           <div className="w-full flex gap-8 mt-3">
//             <p className="w-36">Adhaar Card</p>
//             <input type="file" name="image" className="w-56" />
//             <input type="file" name="image" className="w-56" />
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="w-full bg-gray-400 p-2">Parent/Guardian Details</div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Parent/Guardian Name</p>
//             <input type="text" name="parent" placeholder="Enter your parent/guardian name" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Parent/Guardian Phone</p>
//             <input type="text" name="parentPhone" placeholder="Enter your parent/guardian phone" className="w-56" />
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="w-full bg-gray-400 p-2">Residential Details</div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Local Address</p>
//             <textarea name="localAddress" ></textarea>
//           </div>
//           <div className="w-full ml-44">
//             <input type="checkbox" /> Permanent address is same as local address
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Permanent Address</p>
//             <textarea name="permanentAddress" ></textarea>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="w-full bg-gray-400 p-2">Educational Details</div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Are you a</p>
//             <input type="radio" />
//             <label htmlFor="Student">Student</label>
//             <input type="radio" />
//             <label htmlFor="Working Professional">Working Professional</label>
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Last Attained Qualification</p>
//             <input type="text" name="degree" placeholder="Enter your qualification" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Year</p>
//             <input type="text" name="year" placeholder="Enter your completion year" className="w-56" />
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">College/University</p>
//             <input type="text" name="college" placeholder="Enter your college/university" className="w-56" />
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="w-full bg-gray-400 p-2">Course Details</div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">Course</p>
//             <select name="course" >
//               <option value="">Select</option>
//             </select>
//           </div>
//           <div className="w-full flex gap-8 mt-3 ">
//             <p className="w-36">How did you come to know us?</p>
//             <div>
//             <input type="radio" />
//             <label htmlFor="Google" className="ml-3">Google</label>
//             <input type="radio" className="ml-3"/>
//             <label htmlFor="Linkedin" className="ml-3">LinkedIn</label>
//             <input type="radio" className="ml-3"/>
//             <label htmlFor="Instagram" className="ml-3">Instagram</label>
//             <input type="radio" className="ml-3"/>
//             <label htmlFor="College TPO" className="ml-3">College TPO</label>
//             <input type="radio" className="ml-3"/>
//             <label htmlFor="Friend" className="ml-3">Friend</label>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   )
// }

// export default App 