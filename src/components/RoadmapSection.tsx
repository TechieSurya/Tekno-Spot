import RoadmapCard from './RoadmapCard';

const roadmapStages = [
  {
    id: 1,
    title: "Assessment: Analysis of Demand",
    color: "red" as const,
    position: "top" as const
  },
  {
    id: 2,
    title: "Designing Architecture – UI/UX Design",
    color: "green" as const,
    position: "top" as const
  },
  {
    id: 3,
    title: "QA and Testing",
    color: "blue" as const,
    position: "top" as const
  },
  {
    id: 4,
    title: "Project Organization",
    color: "green" as const,
    position: "bottom" as const
  },
  {
    id: 5,
    title: "MVP or Proof of Concept (Upon Requirement)",
    color: "blue" as const,
    position: "bottom" as const
  },
  {
    id: 6,
    title: "Launch the Application",
    color: "red" as const,
    position: "bottom" as const
  }
];

const RoadmapSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Web Application Development Road Map
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We organize the process to guarantee outstanding quality at each phase, starting from the initial idea all the way to the 
            final launch. Our approach emphasizes meticulous attention to every detail of development, backed by our expertise.
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 z-0"></div>
          
          {/* Timeline Dots - positioned to connect with cards */}
          <div className="flex justify-between items-center relative mb-8 z-10">
            {roadmapStages.map((stage) => (
              <div key={stage.id} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                    stage.color === 'red' ? 'bg-red-500' 
                    : stage.color === 'green' ? 'bg-green-500'
                    : 'bg-blue-500'
                  } transition-all duration-300 hover:scale-125`}
                ></div>
              </div>
            ))}
          </div>

          {/* Top Row Cards */}
          <div className="grid grid-cols-3 gap-8 mb-16 relative">
            {roadmapStages.slice(0, 3).map((stage) => (
              <div key={stage.id} className="relative">
                <RoadmapCard stage={stage} />
                {/* Connecting Line to timeline */}
                <div className="absolute top-full left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2 z-0"></div>
              </div>
            ))}
          </div>

          {/* Bottom Row Cards */}
          <div className="grid grid-cols-3 gap-8 relative">
            {roadmapStages.slice(3, 6).map((stage) => (
              <div key={stage.id} className="relative">
                {/* Connecting Line from timeline */}
                <div className="absolute bottom-full left-1/2 w-0.5 h-16 bg-gray-300 transform -translate-x-1/2 z-0"></div>
                <RoadmapCard stage={stage} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Roadmap */}
        <div className="hidden md:block lg:hidden relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-300"></div>
          
          <div className="space-y-8">
            {roadmapStages.map((stage, index) => (
              <div key={stage.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-10 z-10">
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                    stage.color === 'red' ? 'bg-red-500' :
                    stage.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  } flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="absolute left-14 top-4 w-8 h-0.5 bg-gray-300"></div>
                
                {/* Card */}
                <div className="ml-24 flex-1">
                  <RoadmapCard stage={stage} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="md:hidden space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          {roadmapStages.map((stage, index) => (
            <div key={stage.id} className="relative">
              <div className="flex items-start space-x-4">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                    stage.color === 'red' ? 'bg-red-500' :
                    stage.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                  } flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Card */}
                <div className="flex-1 pb-8">
                  <RoadmapCard stage={stage} isMobile={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
