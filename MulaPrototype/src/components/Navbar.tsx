import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";
import cardAiIcon from "@/assets/card-ai-icon.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg bg-cover bg-center border border-primary/20"
              style={{ backgroundImage: `url(${cardAiIcon})` }}
            />
            <div>
            <div className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mula.AI
            </div>
            <div className="text-xs text-muted-foreground">Smart Credit Optimization</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/card-selection" className="text-foreground hover:text-primary transition-colors">
              Card Selection
            </a>
            <a href="/payments" className="text-foreground hover:text-primary transition-colors">
              Payments
            </a>
            <a href="/rewards" className="text-foreground hover:text-primary transition-colors">
              Rewards
            </a>
            
            <Badge variant="outline" className="border-accent text-accent bg-accent/10">
              <Bot className="w-3 h-3 mr-1" />
              AI Powered
            </Badge>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button variant="hero">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a 
                href="/dashboard" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </a>
              <a 
                href="/card-selection" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Card Selection
              </a>
              <a 
                href="/payments" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Payments
              </a>
              <a 
                href="/rewards" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Rewards
              </a>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button variant="hero" className="justify-start">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;