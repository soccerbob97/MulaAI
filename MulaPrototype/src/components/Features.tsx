import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  CreditCard, 
  MapPin, 
  TrendingUp, 
  Bell, 
  Calculator,
  Target,
  Gift,
  Shield,
  Zap,
  Brain,
  Gamepad2,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location-Based Optimization",
      description: "AI tells you which card to use at every store, restaurant, and online purchase to maximize rewards.",
      badge: "Smart Recommendations",
      color: "primary"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gamified Credit Building",
      description: "Level up your credit score with achievements, streaks, and rewards that make financial responsibility fun.",
      badge: "Level Up",
      color: "warning"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Rewards Optimization",
      description: "Find the best ways to redeem points and miles. Get maximum value from every reward program.",
      badge: "Max Value",
      color: "accent"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Matchmaking",
      description: "Analyzes your lifestyle and spending to recommend 3 ideal cards to apply for with approval odds.",
      badge: "AI Powered",
      color: "primary"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Payment Reminders",
      description: "Never miss a payment with intelligent reminders for bills, credit cards, and regular expenses.",
      badge: "Auto Alerts",
      color: "accent"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Utilization Tracking",
      description: "Real-time credit utilization monitoring with alerts to keep your score optimized.",
      badge: "Credit Health",
      color: "accent"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Hidden Offers Scanner",
      description: "Automatically scans for prequalified offers and hidden deals not visible on public sites.",
      badge: "Exclusive",
      color: "warning"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Credit Limit Optimization",
      description: "Finds underutilized cards and recommends the perfect time to request credit limit increases.",
      badge: "Growth",
      color: "accent"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Loan Matchmaking",
      description: "Recommends best loan options based on your credit profile, comparing APR and terms.",
      badge: "Best Rates",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          badge: "border-primary text-primary bg-primary/10",
          icon: "text-primary",
          hover: "hover:border-primary/40"
        };
      case 'accent':
        return {
          badge: "border-accent text-accent bg-accent/10",
          icon: "text-accent",
          hover: "hover:border-accent/40"
        };
      case 'warning':
        return {
          badge: "border-warning text-warning bg-warning/10",
          icon: "text-warning",
          hover: "hover:border-warning/40"
        };
      default:
        return {
          badge: "border-primary text-primary bg-primary/10",
          icon: "text-primary",
          hover: "hover:border-primary/40"
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50 bg-primary/10 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Everything You Need to
            <br />
            Maximize Your Credit Potential
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform combines intelligent automation with beautiful design to help you build credit, earn rewards, and save money effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <Card 
                key={index} 
                className={`bg-gradient-to-br from-card to-card/50 border-border/50 ${colors.hover} transition-all duration-300 hover:shadow-lg group`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-background/50 ${colors.icon}`}>
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className={colors.badge}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-warning/10 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Optimize Your Financial Future?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already maximized their credit potential and earned more rewards with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="animate-glow">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;