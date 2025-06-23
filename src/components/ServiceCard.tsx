import { Service } from "@/constant/constant";

interface ServiceCardProps {
  service: Service;
  index: number;
  isSecondRow?: boolean;
}

const ServiceCard = ({ service, index, isSecondRow = false }: ServiceCardProps) => {
  const getTopBarColor = () => {
    if (isSecondRow) {
      return index === 0 ? 'bg-brandYellow' : index === 1 ? 'bg-brandBlue' : 'bg-brandYellow';
    }
    return index % 2 === 0 ? 'bg-brandRed' : 'bg-brandYellow';
  };

  const getBottomBarColor = () => {
    if (isSecondRow) {
      return index === 0 ? 'bg-brandYellow' : index === 1 ? 'bg-brandGreen' : 'bg-brandBlue';
    }
    return index % 2 === 0 ? 'bg-brandGreen' : 'bg-brandBlue';
  };

  return (
    <div className="relative flex flex-col w-full max-w-[18rem] bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {service.topPurpleBar && (
        <div className={`h-8 md:h-20 w-full ${getTopBarColor()}`} />
      )}
      
      <div className="p-6 flex flex-col items-center text-center relative flex-grow">
        {service.topGradientUnderline && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full" />
        )}
        
        <h3 className="text-lg font-semibold mb-4 mt-2 text-card-foreground">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {service.bottomGradientUnderline && (
          <div className="h-1 w-6 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mt-auto rounded-full" />
        )}
      </div>
      
      {service.blueBottom && (
        <div className={`absolute bottom-0 left-0 right-0 h-8 md:h-20 ${getBottomBarColor()} rounded-b-lg`} />
      )}
    </div>
  );
};

export default ServiceCard;
