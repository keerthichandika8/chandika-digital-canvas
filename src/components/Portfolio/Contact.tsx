import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-silver text-center mb-16 animate-fade-in">
            Get in Touch
          </h2>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-light text-silver-light mb-6">Let's Connect</h3>
                <p className="text-silver-dark text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations, or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-silver mb-4">Find me on:</h4>
                
                <a 
                  href="https://github.com/keerthichandika8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-soft hover:border-silver/30 transition-all duration-300 group"
                >
                  <div className="p-2 bg-accent rounded-lg group-hover:bg-silver/10 group-hover:shadow-glow-soft transition-all duration-300">
                    <Github className="w-5 h-5 text-silver group-hover:text-silver-light transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-silver group-hover:text-silver-light transition-colors duration-300">GitHub</div>
                    <div className="text-sm text-silver-dark">@keerthichandika8</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg opacity-50">
                  <div className="p-2 bg-accent rounded-lg">
                    <Linkedin className="w-5 h-5 text-silver-dark" />
                  </div>
                  <div>
                    <div className="text-silver-dark">LinkedIn</div>
                    <div className="text-sm text-silver-dark">Coming Soon</div>
                  </div>
                </div>

                <a 
                  href="mailto:keerthichandika8@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:shadow-glow-soft hover:border-silver/30 transition-all duration-300 group"
                >
                  <div className="p-2 bg-accent rounded-lg group-hover:bg-silver/10 group-hover:shadow-glow-soft transition-all duration-300">
                    <Mail className="w-5 h-5 text-silver group-hover:text-silver-light transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-silver group-hover:text-silver-light transition-colors duration-300">Email</div>
                    <div className="text-sm text-silver-dark">keerthichandika8@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-silver mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card border-border text-silver placeholder:text-silver-dark focus:border-silver/50 focus:ring-silver/20"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-silver mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-card border-border text-silver placeholder:text-silver-dark focus:border-silver/50 focus:ring-silver/20"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-silver mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-card border-border text-silver placeholder:text-silver-dark focus:border-silver/50 focus:ring-silver/20 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="glow" 
                  size="lg" 
                  className="w-full animate-glow-pulse"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-silver-dark">
            © 2025 Chandika Chandra Keerthi | All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;