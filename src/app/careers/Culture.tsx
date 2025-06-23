import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Target, Users } from "lucide-react";

const Culture = () => {
  const values = [
    {
      icon: Heart,
      title: "People First",
      color: "#ea4232",
      description: "We believe in putting our team's wellbeing and growth at the center of everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      color: "#4186f4",
      description: "We encourage creative thinking and provide the freedom to experiment with new ideas."
    },
    {
      icon: Target,
      title: "Excellence",
      color: "#f9bd06",
      description: "We strive for the highest quality in our work and continuously push the boundaries."
    },
    {
      icon: Users,
      title: "Collaboration",
      color: " #189b44",
      description: "We believe the best results come from diverse perspectives working together."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture & Values</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We&#39;ve built a workplace where innovation thrives, people grow, and everyone feels valued. 
            Our culture is the foundation of our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div 
                className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Life at Our Company</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From flexible work arrangements to professional development opportunities, 
                we create an environment where you can do your best work while maintaining 
                a healthy work-life balance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandBlue rounded-full"></div>
                  <span>Flexible working hours and remote options</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandBlue rounded-full"></div>
                  <span>Continuous learning and development programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brandBlue rounded-full"></div>
                  <span>Regular team events and company retreats</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl h-64 flex items-center justify-center">
                <Users className="w-24 h-24 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
