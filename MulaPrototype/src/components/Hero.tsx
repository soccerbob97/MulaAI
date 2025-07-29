import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, CreditCard, Target, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* AI Badge */}
        <div className="mb-8 animate-slide-up">
          <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50 bg-primary/10">
            <Bot className="w-4 h-4 mr-2" />
            AI-Powered Financial Intelligence
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-slide-up">
          Maximize Rewards,
          <br />
          Credit & Savings
          <br />
          <span className="text-primary">with AI</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
          Our AI analyzes your spending, optimizes your credit cards, and maximizes rewards at every purchase. 
          Build credit intelligently while earning the most points possible.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto animate-slide-up">
          <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
            <Target className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium">Smart Card Selection</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 text-accent mb-2" />
            <span className="text-sm font-medium">Credit Building</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
            <Zap className="w-8 h-8 text-warning mb-2" />
            <span className="text-sm font-medium">Rewards Optimization</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
            <CreditCard className="w-8 h-8 text-primary-glow mb-2" />
            <span className="text-sm font-medium">Payment Reminders</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 animate-glow">
            Start Optimizing Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-slide-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$2,847</div>
            <div className="text-sm text-muted-foreground">Avg. Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">156K+</div>
            <div className="text-sm text-muted-foreground">Points Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning">15%</div>
            <div className="text-sm text-muted-foreground">Credit Score Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;