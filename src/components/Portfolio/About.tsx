import { Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-silver text-center mb-16 animate-fade-in">
            About Me
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-silver-dark leading-relaxed">
                I am <span className="text-silver-light font-medium">Chandika Chandra Keerthi</span>, 
                a BTech 2nd year student in Information Technology at Seshadri Rao Gudlavalleru Engineering College 
                (Roll No: 24481A1244).
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-silver-light rounded-full shadow-glow-soft"></div>
                  <span className="text-silver">CGPA: <span className="text-silver-light font-medium">9.28</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-silver-light rounded-full shadow-glow-soft"></div>
                  <span className="text-silver">Intermediate: <span className="text-silver-light font-medium">96.6%</span></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-silver-light rounded-full shadow-glow-soft"></div>
                  <span className="text-silver">10th Grade: <span className="text-silver-light font-medium">92% (AP Board)</span></span>
                </div>
              </div>

              <p className="text-silver-dark">
                Currently learning <span className="text-silver-light font-medium">C</span>, 
                <span className="text-silver-light font-medium"> Java</span>, and 
                <span className="text-silver-light font-medium"> Python</span>.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-glow-soft animate-slide-up">
              <h3 className="text-xl text-silver-light font-medium mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-accent rounded-lg group-hover:shadow-glow-soft transition-all duration-300">
                    <Phone className="w-5 h-5 text-silver-light" />
                  </div>
                  <div>
                    <p className="text-silver-dark text-sm">Phone</p>
                    <a 
                      href="tel:+919390311075"
                      className="text-silver hover:text-silver-light transition-colors duration-300"
                    >
                      +91-9390311075
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-accent rounded-lg group-hover:shadow-glow-soft transition-all duration-300">
                    <Mail className="w-5 h-5 text-silver-light" />
                  </div>
                  <div>
                    <p className="text-silver-dark text-sm">Email</p>
                    <a 
                      href="mailto:keerthichandika8@gmail.com"
                      className="text-silver hover:text-silver-light transition-colors duration-300"
                    >
                      keerthichandika8@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
