


function App() {


  return (
    <>
      <form className="p-2" encType="multipart/form-data">
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Personal Information</div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Name</p>
            <input type="text" name="name" placeholder="Enter Your Full Name" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Email</p>
            <input type="email" name="email" placeholder="Enter Your Email Address" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Phone</p>
            <input type="text" name="phone" placeholder="Enter Your Phone Number" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Date of birth</p>
            <input type="date" name="dob" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Gender</p>
            <input type="radio" /><label htmlFor="Male">Male</label>
            <input type="radio" /><label htmlFor="Female">Female</label>
            <input type="radio" /><label htmlFor="Others">Others</label>
          </div>
          <div className="w-full flex gap-8 mt-3">
            <p className="w-36">Adhaar Card</p>
            <input type="file" name="image" className="w-56" />
            <input type="file" name="image" className="w-56" />
          </div>
        </div>
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Parent/Guardian Details</div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Parent/Guardian Name</p>
            <input type="text" name="name" placeholder="Enter your parent/guardian name" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Parent/Guardian Phone</p>
            <input type="text" name="name" placeholder="Enter your parent/guardian phone" className="w-56" />
          </div>
        </div>
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Residential Details</div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Local Address</p>
            <textarea name="localAddress" id=""></textarea>
          </div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Permanent Address</p>
            <textarea name="permanentAddress" id=""></textarea>
          </div>
        </div>
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Educational Details</div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Are you a</p>
            <input type="radio" />
            <label htmlFor="Student">Student</label>
            <input type="radio" />
            <label htmlFor="Working Professional">Working Professional</label>
          </div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Last Attained Qualification</p>
            <input type="text" name="degree" placeholder="Enter your qualification" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">Year</p>
            <input type="text" name="name" placeholder="Enter your completion year" className="w-56" />
          </div>
          <div className="w-full flex gap-8 mt-3 ">
            <p className="w-36">College/University</p>
            <input type="text" name="name" placeholder="Enter your college/university" className="w-56" />
          </div>
        </div>
        <div className="p-3">
          <div className="w-full bg-gray-400 p-2">Course Details</div>
        </div>
      </form>
    </>
  )
}

export default App 
