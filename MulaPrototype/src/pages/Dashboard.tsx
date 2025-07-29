import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Calendar,
  Plus,
  Edit,
  Settings
} from "lucide-react";
import Navbar from "@/components/Navbar";
import creditDashboard from "@/assets/credit-dashboard.jpg";
import gamificationRewards from "@/assets/gamification-rewards.jpg";

const Dashboard = () => {
  const [creditScore, setCreditScore] = useState(742);
  const [utilization, setUtilization] = useState(12);
  const [cards, setCards] = useState([
    { id: 1, name: "Chase Sapphire Reserve", balance: "$1,240", limit: "$10,000", utilization: 12.4 },
    { id: 2, name: "Amex Gold Card", balance: "$856", limit: "$15,000", utilization: 5.7 },
    { id: 3, name: "Capital One Venture", balance: "$423", limit: "$8,000", utilization: 5.3 }
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      name: "New Credit Card",
      balance: "$0",
      limit: "$5,000",
      utilization: 0
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Financial Dashboard
            </h1>
            <p className="text-muted-foreground">Monitor your credit health and optimize your financial strategy</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cards">My Cards</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Credit Score Card */}
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      Credit Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-accent mb-2">{creditScore}</div>
                      <Badge variant="outline" className="border-accent text-accent">
                        Excellent Credit
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Credit Utilization</span>
                          <span className="text-accent">{utilization}%</span>
                        </div>
                        <Progress value={utilization} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Card
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Set Payment Reminder
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Gift className="w-4 h-4 mr-2" />
                      Check Rewards
                    </Button>
                  </CardContent>
                </Card>

                {/* Monthly Stats */}
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                      This Month
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Spending</span>
                        <span className="font-semibold">$4,567</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Rewards Earned</span>
                        <span className="font-semibold text-accent">$156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Points Earned</span>
                        <span className="font-semibold text-primary">12,450</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { merchant: "Whole Foods", amount: "$89.23", card: "Chase Sapphire", points: "+445 pts" },
                      { merchant: "Gas Station", amount: "$45.67", card: "Amex Gold", points: "+183 pts" },
                      { merchant: "Amazon", amount: "$129.99", card: "Capital One", points: "+260 miles" }
                    ].map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <div className="font-medium">{transaction.merchant}</div>
                          <div className="text-sm text-muted-foreground">{transaction.card}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{transaction.amount}</div>
                          <div className="text-sm text-accent">{transaction.points}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">My Credit Cards</h3>
                <Button onClick={addCard}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Card
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                  <Card key={card.id} className="bg-gradient-to-br from-card to-card/50">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Balance</span>
                          <span className="font-semibold">{card.balance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Credit Limit</span>
                          <span className="font-semibold">{card.limit}</span>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Utilization</span>
                            <span>{card.utilization}%</span>
                          </div>
                          <Progress value={card.utilization} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-warning" />
                    Credit Building Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="target-score">Target Credit Score</Label>
                        <Input 
                          id="target-score" 
                          type="number" 
                          placeholder="800" 
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="target-utilization">Target Utilization (%)</Label>
                        <Input 
                          id="target-utilization" 
                          type="number" 
                          placeholder="10" 
                          className="mt-2"
                        />
                      </div>
                      <Button variant="hero">Set Goals</Button>
                    </div>
                    <div 
                      className="h-40 bg-cover bg-center rounded-lg relative"
                      style={{ backgroundImage: `url(${gamificationRewards})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-accent mt-1" />
                          <div>
                            <div className="font-medium">Optimize Grocery Spending</div>
                            <div className="text-sm text-muted-foreground">
                              Use your Amex Gold card for grocery purchases to earn 4x points instead of 1x.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <div className="font-medium">Credit Limit Increase</div>
                            <div className="text-sm text-muted-foreground">
                              You're eligible for a credit limit increase on your Chase card.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="h-40 bg-cover bg-center rounded-lg relative"
                      style={{ backgroundImage: `url(${creditDashboard})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent rounded-lg" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;