"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Users, Zap } from "lucide-react";

const Hero = () => {
  const scrollToJobs = () => {
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brandBlue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brandRed/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 bg-darkBlue rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">We&#39;re Hiring!</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brandBlue to-brandRed bg-clip-text text-transparent">
            Join Our Mission to
            <span className="block text-primary">Shape the Future</span>
          </h1>
          
          <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We&#39;re building the next generation of technology solutions. Join a team of passionate innovators 
            who are redefining what&#39;s possible in tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToJobs} 
              className="text-lg px-8 py-6 text-white bg-darkBlue hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              View Open Positions
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
            >
              Learn Our Culture
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Remote & Hybrid</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Friendly Work Culture</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Fast Growing</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;