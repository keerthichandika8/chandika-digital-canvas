import { Trophy, Users, Presentation } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "8-Hour Hackathon",
      description: "Participated in an 8-hour Hackathon at SRGEC",
      project: "Medication through Mobile App",
      highlight: true,
    },
    {
      icon: Presentation,
      title: "PPT Presentations",
      description: "Actively participated in PPT presentations",
      project: "Multiple academic presentations",
      highlight: false,
    },
    {
      icon: Users,
      title: "Peer Mentor",
      description: "Worked as a Peer Mentor in English Lab",
      project: "Student guidance and support",
      highlight: false,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-silver text-center mb-16 animate-fade-in">
            Achievements
          </h2>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-card border border-border rounded-lg p-8 hover:shadow-glow-soft transition-all duration-500 animate-slide-up ${
                  achievement.highlight ? 'border-silver/30 shadow-glow-soft' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-lg mb-6 transition-all duration-300 ${
                  achievement.highlight 
                    ? 'bg-silver/10 group-hover:shadow-glow-intense' 
                    : 'bg-accent group-hover:bg-silver/10'
                }`}>
                  <achievement.icon className={`w-8 h-8 ${
                    achievement.highlight ? 'text-silver-light' : 'text-silver'
                  } group-hover:text-silver-light transition-colors duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-silver-light group-hover:text-silver transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-silver-dark group-hover:text-silver transition-colors duration-300">
                    {achievement.description}
                  </p>
                  
                  <div className="pt-2 border-t border-border group-hover:border-silver/30 transition-colors duration-300">
                    <p className="text-sm text-silver font-light italic">
                      {achievement.project}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  achievement.highlight ? 'opacity-30' : ''
                }`}></div>
              </div>
            ))}
          </div>

          {/* Additional stats or call-to-action */}
          <div className="text-center mt-16">
            <p className="text-silver-dark text-lg mb-4">
              Always eager to learn and take on new challenges
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-light text-silver-light">9.28</div>
                <div className="text-sm text-silver-dark">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-silver-light">96.6%</div>
                <div className="text-sm text-silver-dark">Intermediate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-silver-light">3+</div>
                <div className="text-sm text-silver-dark">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;