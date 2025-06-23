import { services } from "@/constant/constant";
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your business needs and drive success
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* First Row – 4 cards */}
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {services.slice(0, 4).map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isSecondRow={false}
                />
              ))}
            </div>
          </div>

          {/* Second Row – 3 cards center aligned */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {services.slice(4, 7).map((service, index) => (
                <ServiceCard
                  key={index + 4}
                  service={service}
                  index={index}
                  isSecondRow={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;