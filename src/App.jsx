import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, Mail, Instagram, Clock, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Pets Served' },
    { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
    { value: 5, suffix: '+', label: 'Years of Expertise' },
    { value: 24, suffix: '/7', label: 'Pet Care Support' }
  ];

  const aboutItems = [
    {
      title: "Professional Veterinarians",
      description: "Licensed and experienced veterinarians providing expert care for your pets.",
      icon: <Star className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Quality Products",
      description: "Premium brands only, ensuring the best products for your beloved companions.",
      icon: <Star className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Personalized Care",
      description: "Tailored to each pet's unique needs and requirements.",
      icon: <Star className="w-5 h-5 text-pink-400" />
    },
    {
      title: "Convenient Location",
      description: "Easy access in Domnesti, serving all parts of Ilfov region.",
      icon: <Star className="w-5 h-5 text-pink-400" />
    }
  ];

  const services = [
    {
      name: "Vaccin",
      description: "Complete vaccination package for dogs and cats",
      price: "550 RON",
      icon: <Star className="w-6 h-6 text-pink-400" />
    },
    {
      name: "Deworming",
      description: "Professional deworming treatment",
      price: "300 RON",
      icon: <Star className="w-6 h-6 text-pink-400" />
    },
    {
      name: "Grooming",
      description: "Full grooming service including bath, haircut, and nail trimming",
      price: "200 RON",
      icon: <Star className="w-6 h-6 text-pink-400" />
    }
  ];

  const whyUsItems = [
    {
      number: "01",
      title: "Expert Team",
      description: "Licensed veterinarians and certified groomers with years of experience in pet care."
    },
    {
      number: "02",
      title: "Premium Products",
      description: "Only using high-quality, vet-recommended brands for your pet's safety and health."
    },
    {
      number: "03",
      title: "Personalized Care",
      description: "Customized treatment plans for each pet's specific needs, no one-size-fits-all approach."
    },
    {
      number: "04",
      title: "Convenient Location",
      description: "Easy access from all parts of Ilfov region, open 7 days a week for your convenience."
    }
  ];

  const reviews = [
    {
      name: "Maria D.",
      gender: "F",
      text: "My golden retriever had her first vaccination here and everything went smoothly. The staff was so kind and professional. Highly recommend for any pet owner.",
      rating: 5
    },
    {
      name: "Alexandru M.",
      gender: "M",
      text: "Got my cat's deworming done last week - very affordable price and excellent service. The environment is clean and welcoming. Will definitely come back.",
      rating: 5
    },
    {
      name: "Elena S.",
      gender: "F",
      text: "My dog's grooming session was amazing! The groomer took extra time to make sure everything looked perfect. Excellent attention to detail and great customer service.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How often should I vaccinate my pet?",
      answer: "Vaccination schedules vary by pet type and age. Our veterinarians will create a personalized plan during your consultation. We recommend annual check-ups for optimal health."
    },
    {
      question: "What is included in the grooming service?",
      answer: "Our grooming package includes bath, haircut, nail trimming, ear cleaning, and teeth brushing. We use only pet-safe products for your animal's comfort."
    },
    {
      question: "Do you offer emergency services?",
      answer: "We provide regular business hours for routine appointments. In case of emergencies, we recommend contacting local veterinary clinics immediately. We can refer you to trusted emergency services if needed."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can book online through our website or call us directly at +40757464774. WhatsApp is also available for quick inquiries and bookings."
    },
    {
      question: "What should I bring to my pet's visit?",
      answer: "Please bring your pet's medical records if available. If it's their first visit, please arrive 15 minutes early. We provide all necessary equipment and supplies."
    },
    {
      question: "Do you provide home visits?",
      answer: "We offer mobile services for certain procedures like vaccinations and check-ups. Please contact us to discuss your specific needs and availability."
    }
  ];

  const contactItems = [
    { type: "address", label: "Address", value: "soseaua tudor vladimirescu, domnesti, ilfov" },
    { type: "phone", label: "Phone", value: "+40757464774" },
    { type: "email", label: "Email", value: "office@darivet.com" }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
          <div className="absolute inset-0 z-0">
            <LightRays 
              raysOrigin="top-center" 
              raysColor="#fe01c7" 
              raysSpeed={1} 
              lightSpread={0.5} 
              rayLength={3} 
              followMouse={true} 
              mouseInfluence={0.1} 
              noiseAmount={0} 
              distortion={0} 
              pulsating={false} 
              fadeDistance={1} 
              saturation={1} 
            />
          </div>
          
          <DotPattern className="absolute inset-0 opacity-5" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
            <div className="hero-blur hero-delay-1 mb-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
                <AnimatedShinyText className="text-sm font-medium">Premium Pet Care Since 2019</AnimatedShinyText>
              </div>
            </div>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="bg-gradient-to-b from-white to-pink-400 bg-clip-text text-transparent">Your Pet's Health & Happiness</span>
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              Providing top-quality pet care services since 2019. We believe every pet deserves the best.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(254,1,199, 1)">
                <span className="text-sm font-medium text-white">Book Appointment</span>
              </ShimmerButton>
              
              <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(254,1,199,0.6)]" 
                  />
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Choose Darivet?</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Darivet is a family-owned pet shop dedicated to providing exceptional care for your beloved companions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              {aboutItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6 text-center card-hover"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Pet Care Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Comprehensive services designed to keep your pets healthy and happy.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6 text-center card-hover ${index === 1 ? 'relative' : ''}`}
                >
                  {index === 1 && (
                    <BorderBeam size={80} duration={15} colorFrom="#fe01c7" colorTo="#fe01c7" />
                  )}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-base font-bold text-pink-400">{service.price}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Why Pet Owners Trust Us</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                We stand out in the pet care industry with our unique approach to quality service.
              </p>
            </div>
            
            <div className="space-y-8 animate-on-scroll">
              {whyUsItems.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="text-5xl font-black text-pink-400/20">{item.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Pet Parents Say</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Real stories from real pet owners who trust us with their furry family members.
              </p>
            </div>
            
            <div className="relative flex max-w-5xl mx-auto flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s]">
                {reviews.map((review, index) => (
                  <Card 
                    key={index} 
                    className="w-[300px] sm:w-[350px] bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6 text-center mx-4 card-hover"
                  >
                    <div className="flex justify-center mb-4">
                      <Avatar>
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1' : 'girl_1'}.jpg`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-pink-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                    <p className="text-sm font-medium text-white">{review.name}</p>
                  </Card>
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 sm:py-32 lg:py-40">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Everything you need to know about our pet care services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.05] rounded-xl mb-4">
                    <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200 rounded-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-x-clip py-24 sm:py-32 lg:py-40">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-pink-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Contact Us Anytime</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Visit our shop or book an appointment today to experience premium pet care services.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
              <div>
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="flex justify-center mb-4">
                        {item.type === 'phone' && <Phone className="w-6 h-6 text-pink-400" />}
                        {item.type === 'address' && <MapPin className="w-6 h-6 text-pink-400" />}
                        {item.type === 'email' && <Mail className="w-6 h-6 text-pink-400" />}
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <ShimmerButton className="shadow-2xl btn-hover" background="rgba(254,1,199, 1)">
                    <span className="text-sm font-medium text-white">Book Appointment</span>
                  </ShimmerButton>
                  
                  <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
              
              <div>
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden h-[500px]">
                  <div className="h-full">
                    <iframe
                      src={"https://www.google.com/maps?q=" + encodeURIComponent("soseaua tudor vladimirescu, domnesti, ilfov") + "&output=embed"}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Darivet. All rights reserved.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/darivet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-pink-500/20 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
