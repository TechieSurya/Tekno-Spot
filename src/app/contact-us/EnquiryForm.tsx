"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';


const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true); 

  try {
    await addDoc(collection(db, "contactSubmissions"), {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      service: formData.service,
      message: formData.message,
      createdAt: Timestamp.now(),
    });

    alert("Submitted successfully!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      service: "",
      message: "",
    });
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Something went wrong!");
  } finally {
    setIsSubmitting(false); // ✅ End loading
  }
};

    

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Technical Support",
    "Consulting Services",
    "Other"
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-3">Send us a Message</h2>
        <p className="text-gray-500 leading-relaxed">Fill out the form below and we&#39;ll get back to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
              className="border-gray-200 focus:border-blue-400 focus:ring-blue-100 transition-colors rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@example.com"
              className="border-gray-200 focus:border-blue-400 focus:ring-blue-100 transition-colors rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
            <Input
              id="phone"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              className="border-gray-200 focus:border-blue-400 focus:ring-blue-100 transition-colors rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service *</Label>
            <Select value={formData.service} onValueChange={handleServiceChange} required>
              <SelectTrigger className="border-gray-200 focus:border-blue-400 focus:ring-blue-100 transition-colors rounded-lg">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                {services.map((service) => (
                  <SelectItem key={service} value={service} className="hover:bg-blue-50 cursor-pointer">
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us more about your enquiry..."
            className="min-h-[120px] resize-none border-gray-200 focus:border-blue-400 focus:ring-blue-100 transition-colors rounded-lg"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default EnquiryForm;