import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WorkTogether() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("All fields are required!");
      return false;
    }
    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format!");
      return false;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Enter a valid 10-digit mobile number!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      toast.error(error.response?.data?.error || "Failed to send message. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Form */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 w-full">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">Let's Work Together</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none" />
            <textarea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
            <button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-3 rounded-lg font-semibold text-lg">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-purple-400">Get in Touch</h3>
          <p className="text-gray-300">You can also reach me via:</p>
          <div className="flex items-center space-x-4 bg-gray-900 p-5 rounded-lg shadow-md">
            📧 <p className="text-lg">bhabani@example.com</p>
          </div>
          <div className="flex items-center space-x-4 bg-gray-900 p-5 rounded-lg shadow-md">
            📞 <p className="text-lg">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  );
}
