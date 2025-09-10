import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/radialglass-WVy3YWBswVgJ5y70HzgbQ5U2/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-between">
        {/* Main Content - Centered but slightly lower */}
        <div className="flex-1 text-center mt-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-silver mb-6 tracking-tight">
            Hi, I'm <span className="text-silver-light font-normal">Chandika Chandra Keerthi</span>
          </h1>
          <p className="text-xl md:text-2xl text-silver-dark mb-12 font-light">
            BTech IT Student | Aspiring Developer
          </p>
          
          <Button 
            variant="glow" 
            size="lg" 
            onClick={scrollToProjects}
            className="animate-glow-pulse"
          >
            View My Work
          </Button>
        </div>

        {/* Profile Picture - Top Right */}
        <div className="hidden lg:block absolute top-20 right-20 animate-slide-up">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-silver/30 shadow-glow-soft bg-gradient-glow">
              <img 
                src="/lovable-uploads/5081b903-ab20-4f11-8caa-6efae23b4b67.png" 
                alt="Chandika Chandra Keerthi" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial opacity-50 animate-glow-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-silver/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-silver-light rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;