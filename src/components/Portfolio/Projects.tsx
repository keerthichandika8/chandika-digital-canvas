import { ExternalLink, Calculator, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Scientific Calculator",
      description: "A comprehensive scientific calculator built with Java, featuring advanced mathematical operations and a clean, intuitive user interface.",
      tech: "Java",
      icon: Calculator,
      link: "https://keerthichandika8.github.io/SCIENTIFIC-CALCULATOR-/",
      features: ["Advanced Math Functions", "Memory Operations", "Scientific Notations", "Responsive Design"]
    },
    {
      title: "To-Do Task Game",
      description: "An interactive to-do list application gamified to make task management engaging and fun, built using Java with modern UI principles.",
      tech: "Java",
      icon: CheckSquare,
      link: "https://keerthichandika8.github.io/TO-DO-Game-/",
      features: ["Gamification Elements", "Task Prioritization", "Progress Tracking", "Interactive UI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-silver text-center mb-16 animate-fade-in">
            My Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-glow-intense transition-all duration-500 animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-silver/10 group-hover:shadow-glow-soft transition-all duration-300">
                      <project.icon className="w-6 h-6 text-silver group-hover:text-silver-light transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-silver-light group-hover:text-silver transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-silver-dark">{project.tech}</p>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-silver-dark mb-6 leading-relaxed group-hover:text-silver transition-colors duration-300">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-silver mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-silver-light rounded-full shadow-glow-soft"></div>
                        <span className="text-sm text-silver-dark group-hover:text-silver transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="flex justify-between items-center pt-6 border-t border-border group-hover:border-silver/30 transition-colors duration-300">
                  <Button 
                    variant="glow" 
                    size="sm"
                    className="group-hover:shadow-glow-intense"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  
                  <div className="text-sm text-silver-dark">
                    Live Demo Available
                  </div>
                </div>

                {/* Decorative glow effect */}
                <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-silver-dark text-lg mb-6">
              More projects coming soon as I continue to learn and grow!
            </p>
            <Button variant="outline" size="lg" className="border-silver/30 text-silver hover:border-silver/50 hover:text-silver-light">
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;