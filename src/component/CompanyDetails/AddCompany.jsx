import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../GlobalState/MyProvider';
import axios from 'axios';

  const AddCompany = () => {
  const navigate = useNavigate(); 
  const { token } = useContext(MyContext); 

  useEffect(() => {
    if (token === null) {
      navigate("/"); 
    }
  }, [token, navigate]); 

  const [formData, setFormData] = useState({
    companyName: '',
    companyCode: '',
    companyEmail: '',
    companyMobile: '',
    companyLocation: '',
    companyServer:'',
    companyDomain:'',
    registeredDate: '',
    OrganisationChart: false,
    Tasks: false,
    LeaveManagement: false,
    TimeSheet: false,
    MyCollegues: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', 
    }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.companyName) {
      newErrors.companyName = '*Company name is required.';
    }
    if (!formData.companyCode) {
      newErrors.companyCode = '*Company code is required.';
    }
    if (!formData.companyEmail) {
      newErrors.companyEmail = '*Valid company email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      newErrors.companyEmail = '*Please enter a valid email address.';
    }
    if (!formData.companyMobile) {
      newErrors.companyMobile = '*Company mobile is required.';
    } else if (!/^\d+$/.test(formData.companyMobile)) {
      newErrors.companyMobile = '*Company mobile must be a valid number.';
    }
    if (!formData.companyLocation) {
      newErrors.companyLocation = '*Company location is required.';
    }
    if (!formData.registeredDate) {
      newErrors.registeredDate = '*Registered date is required.';
    }
    if(!formData.companyServer){
      newErrors.companyServer = '*Company server is required.';
    }
    if(!formData.companyDomain){
      newErrors.companyDomain = '*Company domain is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    // if (validate()) {
    //   console.log(formData);
    //   console.log(token);
  
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:8085/api/companyDetails/add",
    //       formData,
    //       {
    //         headers: {
    //           "Authorization": `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     console.log("Response:", response.data);
    //   } catch (e) {
    //     console.log("Failed to send request:", e);
    //   }
    // }

    try{
      const response= await axios.get("http://localhost:8085/api/companyDetails",{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })

      console.log(response)
    }catch(error){
      console.log("Error", error);
      
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">Add Company Details</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name and Company Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-base font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyName && touched.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="companyCode" className="block text-base font-medium text-gray-700">Company Code</label>
            <input
              type="text"
              id="companyCode"
              name="companyCode"
              value={formData.companyCode}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyCode && touched.companyCode && (
              <p className="text-red-500 text-sm">{errors.companyCode}</p>
            )}
          </div>
        </div>

        {/* Company Email and Company Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyEmail" className="block text-base font-medium text-gray-700">Company Email</label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyEmail && touched.companyEmail && (
              <p className="text-red-500 text-sm">{errors.companyEmail}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="companyMobile" className="block text-base font-medium text-gray-700">Company Mobile</label>
            <input
              type="text"
              id="companyMobile"
              name="companyMobile"
              value={formData.companyMobile}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyMobile && touched.companyMobile && (
              <p className="text-red-500 text-sm">{errors.companyMobile}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyDomain" className="block text-base font-medium text-gray-700">Company Domain</label>
            <input
              type="text"
              id="companyDomain"
              name="companyDomain"
              value={formData.companyDomain}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyDomain && touched.companyDomain && (
              <p className="text-red-500 text-sm">{errors.companyDomain}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="companyServer" className="block text-base font-medium text-gray-700">Company Server</label>
            <input
              type="text"
              id="companyServer"
              name="companyServer"
              value={formData.companyServer}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyServer && touched.companyServer && (
              <p className="text-red-500 text-sm">{errors.companyServer}</p>
            )}
          </div>
        </div>

        {/* Company Location and Registered Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyLocation" className="block text-base font-medium text-gray-700">Company Location</label>
            <input
              type="text"
              id="companyLocation"
              name="companyLocation"
              value={formData.companyLocation}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.companyLocation && touched.companyLocation && (
              <p className="text-red-500 text-sm">{errors.companyLocation}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="registeredDate" className="block text-base font-medium text-gray-700">Registered Date</label>
            <input
              type="date"
              id="registeredDate"
              name="registeredDate"
              value={formData.registeredDate}
              onChange={handleChange}
              onBlur={handleFocus}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-0 focus:ring-slate-500 focus:outline-none focus:border-gray-300 transition-all"
            />
            {errors.registeredDate && touched.registeredDate && (
              <p className="text-red-500 text-sm">{errors.registeredDate}</p>
            )}
          </div>
        </div>

        {/* Checkbox Fields */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="LeaveManagement"
              name="LeaveManagement"
              checked={formData.LeaveManagement}
              onChange={handleChange}
              onBlur={handleFocus}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="LeaveManagement" className="text-base font-medium text-gray-700">Leave Management</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="OrganisationChart"
              name="OrganisationChart"
              checked={formData.OrganisationChart}
              onChange={handleChange}
              onBlur={handleFocus}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="OrganisationChart" className="text-base font-medium text-gray-700">Organisation Chart</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="Tasks"
              name="Tasks"
              checked={formData.Tasks}
              onChange={handleChange}
              onBlur={handleFocus}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="Tasks" className="text-base font-medium text-gray-700">Tasks</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="TimeSheet"
              name="TimeSheet"
              checked={formData.TimeSheet}
              onChange={handleChange}
              onBlur={handleFocus}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="TimeSheet" className="text-base font-medium text-gray-700">TimeSheet</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="MyCollegues"
              name="MyCollegues"
              checked={formData.MyCollegues}
              onChange={handleChange}
              onBlur={handleFocus}
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="MyCollegues" className="text-base font-medium text-gray-700">My Colleagues</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md mt-2 hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCompany;


