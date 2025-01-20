

import { useState } from "react";

function App() {
  const [formElements, setFormElements] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    adhaarFront: null,
    adhaarBack: null,
    parent: "",
    parentPhone: "",
    localAddress: "",
    permanentAddress: "",
    sameAddress: false,
    qualification: "",
    year: "",
    college: "",
    course: "",
    source: "",
  });

  const [adhaarPreview, setAdhaarPreview] = useState({
    front: null,
    back: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormElements((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = files[0];
      setFormElements((prev) => ({
        ...prev,
        [name]: file,
      }));

      // Display uploaded image preview
      setAdhaarPreview((prev) => ({
        ...prev,
        [name === "adhaarFront" ? "front" : "back"]: URL.createObjectURL(file),
      }));
    } else {
      setFormElements((prev) => ({ ...prev, [name]: value }));
    }
  };

      

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in formElements) {
      formData.append(key, formElements[key]);
    }

    console.log("Form Data Submitted:", formElements);

    // You can send `formData` to your backend API using fetch/axios
  };

  return (
    <>
      <form className="p-2" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Personal Information</div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              className="w-56"
              value={formElements.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-56"
              value={formElements.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Phone</p>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="w-56"
              value={formElements.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Date of birth</p>
            <input
              type="date"
              name="dob"
              className="w-56"
              value={formElements.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Gender</p>
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            <input type="radio" name="gender" value="Others" onChange={handleChange} /> Others
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Adhaar Card (Front & Back)</p>
            <input type="file" name="adhaarFront" className="w-56" onChange={handleChange} />
            <input type="file" name="adhaarBack" className="w-56" onChange={handleChange} />
          </div>
          {adhaarPreview.front && (
            <div className="mt-3">
              <p className="w-36">Aadhaar Front Preview:</p>
              <img src={adhaarPreview.front} alt="Aadhaar Front" className="w-56 h-32 border" />
            </div>
          )}

          {adhaarPreview.back && (
            <div className="mt-3">
              <p className="w-36">Aadhaar Back Preview:</p>
              <img src={adhaarPreview.back} alt="Aadhaar Back" className="w-56 h-32 border" />
            </div>
          )}
        </div>

        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Parent/Guardian Details</div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Parent/Guardian Name</p>
            <input
              type="text"
              name="parent"
              placeholder="Enter Parent Name"
              className="w-56"
              value={formElements.parent}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Parent/Guardian Phone</p>
            <input
              type="text"
              name="parentPhone"
              placeholder="Enter Parent Phone"
              className="w-56"
              value={formElements.parentPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Residential Details</div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Local Address</p>
            <textarea
              name="localAddress"
              value={formElements.localAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="w-full ml-44">
            <input type="checkbox" name="sameAddress" onChange={handleChange} />
            Permanent address is same as local address
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Permanent Address</p>
            <textarea
              name="permanentAddress"
              value={formElements.permanentAddress}
              onChange={handleChange}
              disabled={formElements.sameAddress}
            ></textarea>
          </div>
        </div>

        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Educational Details</div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Qualification</p>
            <input
              type="text"
              name="qualification"
              placeholder="Enter Qualification"
              className="w-56"
              value={formElements.qualification}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Course Details</div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Course</p>
            <select name="course" value={formElements.course} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
        </div>

        <div className="p-3">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;

