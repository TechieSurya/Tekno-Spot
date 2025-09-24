"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChevronRight } from "lucide-react";

const JobListings = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  
  const departments = ["All", "Developer", "Designer", "Marketing",];
  
  const jobs = [
    {
      title: "Full Stack Developer",
      department: "Developer",
      location: "Trichy",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our engineering team to build scalable web applications using modern technologies.",
      requirements: ["0-2 years experience", "React/Node.js", "TypeScript", "AWS","Firebase"]
    },
    
    {
      title: "UI/UX Designer",
      department: "Designer",
      location: "Trichy",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Shape the user experience of our products with your creative design skills.",
      requirements: ["1-2 years experience", "Figma", "User Research", "Prototyping"]
    },
    {
      title: "Front-End Developer",
      department: "Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build and maintain our infrastructure and deployment pipelines.",
      requirements: ["0-1 years experience", "React JS", "Next JS", "Tailwind CSS"]
    },
    {
      title: "Mobile Application Developer",
      department: "Developer",
      location: "Trichy",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our engineering team to build scalable Mobile applications using modern technologies.",
      requirements: ["0-2 years experience", "React Native", "Flutter", "AWS","Firebase"]
    },
    {
      title: "Product Manager",
      department: "Marketing",
      location: "Trichy",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Drive product strategy and work closely with engineering and design teams.",
      requirements: ["5+ years experience", "Product Strategy", "Data Analysis",]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Trichy | Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Help grow our brand and reach new customers through creative marketing campaigns.",
      requirements: ["2+ years experience", "Content Marketing", "SEO", "Analytics"]
    },
  ];

  const filteredJobs = selectedDepartment === "All" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <section id="jobs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover opportunities to grow your career with us. We&#39;re always looking for 
            talented individuals who share our passion for innovation.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              onClick={() => setSelectedDepartment(dept)}
              className="transition-all duration-300"
            >
              {dept}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mb-3 font-bold text-black">
                      {job.department}
                    </Badge>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <Badge key={idx}  className="text-xs p-2 bg-darkBlue">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-brandBlue">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No positions found in this department. Check back soon for new opportunities!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
