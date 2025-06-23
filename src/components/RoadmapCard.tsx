interface RoadmapStage {
  id: number;
  title: string;
  color: 'red' | 'green' | 'blue';
  position: 'top' | 'bottom';
}

interface RoadmapCardProps {
  stage: RoadmapStage;
  isMobile?: boolean;
}

const RoadmapCard = ({ stage, isMobile = false }: RoadmapCardProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-500 hover:bg-red-600';
      case 'green':
        return 'bg-green-500 hover:bg-green-600';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="group relative">
      <div className={`
        ${getColorClasses(stage.color)} 
        text-white p-6 rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-xl hover:scale-105 cursor-pointer
        ${isMobile ? 'max-w-sm' : ''}
      `}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm leading-tight pr-2">
            {stage.title}
          </h3>
        </div>
        
      </div>
    </div>
  );
};

export default RoadmapCard;
