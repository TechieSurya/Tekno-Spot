"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Upload, CheckCircle } from "lucide-react";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ApplicationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    let resumeURL = null;

    // Upload Resume if exists
    if (formData.resume) {
      const fileName = `${Date.now()}_${formData.name.replace(/\s/g, '_')}_${formData.resume.name}`;
      const storageRef = ref(storage, `resumes/${formData.email}/${fileName}`);
      const snapshot = await uploadBytes(storageRef, formData.resume);
      resumeURL = await getDownloadURL(snapshot.ref);
    }

    // Save form data to Firestore
    await addDoc(collection(db, "applications"), {
      name: formData.name,
      email: formData.email,
      position: formData.position,
      experience: formData.experience,
      coverLetter: formData.coverLetter,
      resumeURL: resumeURL,
      submittedAt: Timestamp.now(),
    });

    alert({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      position: "",
      experience: "",
      coverLetter: "",
      resume: null,
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    alert({
      title: "Submission Failed",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  const handleInputChange = (field: string, value: string | File | null) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0] || null;

  if (file) {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      alert({
        title: "Invalid file type",
        description: "Only PDF, DOC, and DOCX files are allowed.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > maxSize) {
    alert({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }
  }

  handleInputChange("resume", file);
};


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
              Take the first step towards an exciting career. Fill out the form below 
              and let&#39;s start a conversation about your future with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Quick Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Position of Interest</Label>
                    <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black border border-muted">
                        <SelectItem value="senior-full-stack">Senior Full Stack Developer</SelectItem>
                        <SelectItem value="product-designer">Product Designer</SelectItem>
                        <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                        <SelectItem value="sales-representative">Sales Development Representative</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black border border-muted">
                        <SelectItem value="Fresher">Fresher</SelectItem>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-6">4-6 years</SelectItem>
                        <SelectItem value="7-10">7-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you'd like to join our team..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => document.getElementById('resumeUpload')?.click()}>
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                  {formData.resume ? formData.resume.name : 'Click to upload your resume (PDF, DOC, or DOCX)'}
                  </p>
                  <input
                  id="resumeUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e)}
                  className="hidden"/>
                 </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">What Happens Next?</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• We&#39;ll review your application within 2-3 business days</li>
                        <li>• If there&#39;s a match, we&#39;ll schedule a brief phone screening</li>
                        <li>• Technical interviews with team members</li>
                        <li>• Final interview with hiring manager</li>
                        <li>• Reference checks and offer discussion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-secondary/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">surya@teknospot.in</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91-76049 21773</p>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-muted/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Equal Opportunity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We are an equal opportunity employer committed to diversity and inclusion. 
                    We welcome applications from all qualified candidates regardless of race, 
                    gender, age, religion, sexual orientation, or disability status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
