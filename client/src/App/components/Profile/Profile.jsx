import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Upload } from 'lucide-react';
import { createProfile } from '../../redux/actions/StaffProfileAction';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    specialization: '',
    user: '',
    password: '',
    type: '',
    contact_number: '',
    email: '',
    qualifications:'',
    department: '',
    role:'',
   
  });

  const [file, setFile] = useState(null);
  const dispatch = useDispatch(); // Use dispatch from redux

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Dispatch the action with form data and a callback
    dispatch(createProfile(formData, (data) => {
      // Show alert and log response data
      alert('Form submitted successfully!');
      console.log('Staff data:', data);
  
      // Reset form data if needed
      setFormData({
        fullName: '',
        specialization: '',
        user: '',
        password: '',
        type: '',
        contact_number: '',
        email: '',
        qualifications:'',
        department: '',
        role:'',
      });
    }));
  };
  
  return (

          <div className="flex-1 overflow-y-auto px-20 mt-10 rounded-lg m-4">
            <h1 className="text-2xl font-bold text-center mb-6 ">Profile Creation</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4 bg-[#E4D7D7] p-2">Basic Information:</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-1 text-sm font-medium"> Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="specialization" className="block mb-1 text-sm font-medium">Specialization</label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter Specialization"
                     
                    />
                  </div>
                  <div >
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange} 
                      className="w-full p-2 border rounded"
                      placeholder="Enter Email Id"
                      required
                    />
                  </div>
                  <div >
                    <label htmlFor="user" className="block mb-1 text-sm font-medium">User Name</label>
                    <input
                      type="text"
                      id="user"
                      name="user"
                      value={formData.user}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div >
                    <label htmlFor="address" className="block mb-1 text-sm font-medium">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange} 
                      className="w-full p-2 border rounded"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div >
                    <label htmlFor="type" className="block mb-1 text-sm font-medium">Profession</label>
                    <input
                      type="text"
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange} 
                      className="w-full p-2 border rounded"
                      placeholder="Enter profession type (ex. Doctor , Nurse)"
                      required
                    />
                  </div>
                  <div >
                    <label htmlFor="contact_number" className="block mb-1 text-sm font-medium">Contact No</label>
                    <input
                      type="number"
                      id="contact_number"
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={handleInputChange} 
                      className="w-full p-2 border rounded"
                      placeholder="Enter Contact No"
                      required
                    />
                  </div>
               
                  <div >
                    <label htmlFor="qualifications" className="block mb-1 text-sm font-medium">Qualification</label>
                    <input
                      type="text"
                      id="qualifications"
                      name="qualifications"
                      value={formData.qualifications}
                      onChange={handleInputChange} 
                      className="w-full p-2 border rounded"
                      placeholder="Enter qualifications"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block mb-1 text-sm font-medium">Department</label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="Cardiology">Cardiology</option> 
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Nephrology">Nephrology</option>
                      <option value="Laboratory"> Laboratory</option>
                      <option value="General"> General</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="role" className="block mb-1 text-sm font-medium">Role</label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="SuperAdmin">SuperAdmin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                </div>
                {/* <div className='grid grid-cols-3 gap-3 mt-4'>
                  <div>
                    <label htmlFor="state" className="block mb-1 text-sm font-medium">State</label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="district" className="block mb-1 text-sm font-medium">District</label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select District</option>
                      <option value="district1">District 1</option>
                      <option value="district2">District 2</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pinCode" className="block mb-1 text-sm font-medium">Pin code</label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter pin code"
                      required
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div>
                    <label htmlFor="mobileNo" className="block mb-1 text-sm font-medium">Mobile no</label>
                    <input
                      type="tel"
                      id="mobileNo"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter mobile no"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block mb-1 text-sm font-medium">Select gender type</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">Enter email number</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label htmlFor="blood_group" className="block mb-1 text-sm font-medium">Enter blood group</label>
                    <input
                      type="text"
                      id="blood_group"
                      name="blood_group"
                      value={formData.blood_group}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      placeholder="Enter blood_group "
                      required
                    />
                  </div>
                </div> */}
                
              </div>


              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
  )
}
export default Profile