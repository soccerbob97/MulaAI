import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  TrendingUp, 
  Target, 
  MapPin, 
  Star, 
  AlertCircle,
  Trophy,
  Gift,
  DollarSign,
  Calendar
} from "lucide-react";
import creditDashboard from "@/assets/credit-dashboard.jpg";
import gamificationRewards from "@/assets/gamification-rewards.jpg";

const Dashboard = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Your AI-Powered Financial Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights, intelligent recommendations, and automated optimization all in one beautiful dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credit Score & Utilization */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Credit Health
              </CardTitle>
              <CardDescription>Track your credit journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">742</div>
                <Badge variant="outline" className="border-accent text-accent">
                  Excellent Credit
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Credit Utilization</span>
                    <span className="text-accent">12%</span>
                  </div>
                  <Progress value={12} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Keep under 30% for optimal score</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Payment History</span>
                    <span className="text-accent">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              <div 
                className="h-32 bg-cover bg-center rounded-lg relative"
                style={{ backgroundImage: `url(${creditDashboard})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
              </div>
            </CardContent>
          </Card>

          {/* Card Recommendations */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Smart Card Recommendations
              </CardTitle>
              <CardDescription>Optimized for your current location and spending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-6 p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Currently at: Whole Foods Market</span>
                <Badge variant="outline" className="ml-auto border-accent text-accent">5x Points Available</Badge>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-accent to-accent-glow rounded"></div>
                    <div>
                      <div className="font-semibold">Chase Sapphire Reserve</div>
                      <div className="text-sm text-muted-foreground">5x points on grocery purchases</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">+125 pts</div>
                    <div className="text-xs text-muted-foreground">$25 purchase</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-primary to-primary-glow rounded"></div>
                    <div>
                      <div className="font-semibold">Amex Gold Card</div>
                      <div className="text-sm text-muted-foreground">4x points on grocery purchases</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">+100 pts</div>
                    <div className="text-xs text-muted-foreground">$25 purchase</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                    <div>
                      <div className="font-semibold">Capital One Venture</div>
                      <div className="text-sm text-muted-foreground">2x miles on all purchases</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">+50 miles</div>
                    <div className="text-xs text-muted-foreground">$25 purchase</div>
                  </div>
                </div>
              </div>

              <Button variant="hero" className="w-full mt-6">
                <CreditCard className="w-4 h-4 mr-2" />
                Use Recommended Card
              </Button>
            </CardContent>
          </Card>

          {/* Gamification Section */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 border-warning/20 hover:border-warning/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-warning" />
                Credit Building Journey
              </CardTitle>
              <CardDescription>Level up your credit score and earn rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Credit Master Level</span>
                    <Badge variant="outline" className="border-warning text-warning">Level 8</Badge>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress to Level 9</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-3" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                      <Star className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Perfect Payment Streak</div>
                        <div className="text-sm text-muted-foreground">24 months in a row</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                      <Gift className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">Utilization Master</div>
                        <div className="text-sm text-muted-foreground">Keep under 10%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="h-40 bg-cover bg-center rounded-lg relative"
                  style={{ backgroundImage: `url(${gamificationRewards})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="premium" size="sm" className="w-full">
                      Claim Rewards
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-accent" />
                Monthly Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$2,341</div>
                <div className="text-sm text-muted-foreground">Points Value Earned</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Spending</span>
                  <span className="font-semibold">$4,567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cashback Earned</span>
                  <span className="font-semibold text-accent">$156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Points Earned</span>
                  <span className="font-semibold text-primary">12,450</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-warning">
                  <Calendar className="w-4 h-4" />
                  <span>Next payment due in 5 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;