import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Gift, 
  Star, 
  Plane, 
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Target,
  Zap,
  Calculator,
  Trophy,
  CreditCard
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Rewards = () => {
  const [selectedCard, setSelectedCard] = useState("all");
  const [redeemAmount, setRedeemAmount] = useState("");
  const [redeemType, setRedeemType] = useState("");

  const rewardsData = [
    {
      id: 1,
      cardName: "Chase Sapphire Reserve",
      pointsBalance: 45678,
      cashValue: "$456.78",
      transferValue: "$684.12",
      category: "Travel Points",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      cardName: "Amex Gold Card",
      pointsBalance: 32450,
      cashValue: "$324.50",
      transferValue: "$487.25",
      category: "Membership Rewards",
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 3,
      cardName: "Capital One Venture",
      pointsBalance: 28900,
      cashValue: "$289.00",
      transferValue: "$289.00",
      category: "Miles",
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      cardName: "Citi Double Cash",
      pointsBalance: 15600,
      cashValue: "$156.00",
      transferValue: "$156.00",
      category: "Cash Back",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const redemptionOptions = [
    {
      type: "travel",
      name: "Travel Portal",
      multiplier: "1.5x",
      description: "Book flights, hotels, and more through the travel portal",
      minPoints: 1000,
      icon: <Plane className="w-5 h-5" />
    },
    {
      type: "transfer",
      name: "Transfer Partners",
      multiplier: "1.7x",
      description: "Transfer to airline and hotel partners for maximum value",
      minPoints: 1000,
      icon: <Star className="w-5 h-5" />
    },
    {
      type: "cash",
      name: "Cash Back",
      multiplier: "1.0x",
      description: "Direct cash back to your account",
      minPoints: 2500,
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      type: "shopping",
      name: "Shopping Portal",
      multiplier: "1.2x",
      description: "Shop with participating retailers",
      minPoints: 500,
      icon: <ShoppingBag className="w-5 h-5" />
    }
  ];

  const totalPoints = rewardsData.reduce((sum, card) => sum + card.pointsBalance, 0);
  const totalCashValue = rewardsData.reduce((sum, card) => sum + parseFloat(card.cashValue.replace('$', '')), 0);
  const totalTransferValue = rewardsData.reduce((sum, card) => sum + parseFloat(card.transferValue.replace('$', '')), 0);

  const calculateRedemption = () => {
    if (!redeemAmount || !redeemType) {
      toast.error("Please select points amount and redemption type");
      return;
    }

    const points = parseInt(redeemAmount);
    const option = redemptionOptions.find(opt => opt.type === redeemType);
    
    if (option) {
      const multiplier = parseFloat(option.multiplier.replace('x', ''));
      const value = (points * multiplier / 100).toFixed(2);
      toast.success(`${points} points = $${value} value via ${option.name}`);
    }
  };

  const filteredRewards = selectedCard === "all" 
    ? rewardsData 
    : rewardsData.filter(card => card.id.toString() === selectedCard);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Rewards Optimization
            </h1>
            <p className="text-muted-foreground">Maximize the value of your points, miles, and cashback</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="optimize">Optimize</TabsTrigger>
              <TabsTrigger value="redeem">Redeem</TabsTrigger>
              <TabsTrigger value="tracking">Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Total Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {totalPoints.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Across all cards</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                      Cash Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent mb-2">
                      ${totalCashValue.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Current cash worth</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-warning/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-warning" />
                      Max Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-warning mb-2">
                      ${totalTransferValue.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Optimized redemption</div>
                  </CardContent>
                </Card>
              </div>

              {/* Card-by-Card Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Rewards Breakdown
                  </CardTitle>
                  <CardDescription>Points and value by credit card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rewardsData.map((card) => (
                      <div key={card.id} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-6 bg-gradient-to-r ${card.color} rounded`}></div>
                            <div>
                              <div className="font-medium">{card.cardName}</div>
                              <div className="text-sm text-muted-foreground">{card.category}</div>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-primary text-primary">
                            {card.pointsBalance.toLocaleString()} pts
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex justify-between">
                            <span className="text-sm">Cash Value:</span>
                            <span className="font-semibold">{card.cashValue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Transfer Value:</span>
                            <span className="font-semibold text-accent">{card.transferValue}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="optimize" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    AI Optimization Recommendations
                  </CardTitle>
                  <CardDescription>Maximize your rewards value with these suggestions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Plane className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <div className="font-medium">Transfer Chase Points to Hyatt</div>
                          <div className="text-sm text-muted-foreground mb-2">
                            Your 45,678 Chase points could be worth $684 when transferred to Hyatt (1.5¢ per point)
                          </div>
                          <Button size="sm" variant="outline">Learn More</Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Trophy className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <div className="font-medium">Amex Transfer Bonus</div>
                          <div className="text-sm text-muted-foreground mb-2">
                            30% transfer bonus to British Airways until end of month. Transfer now for maximum value!
                          </div>
                          <Button size="sm" variant="outline">View Offer</Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Gift className="w-5 h-5 text-warning mt-1" />
                        <div>
                          <div className="font-medium">Expiring Points Alert</div>
                          <div className="text-sm text-muted-foreground mb-2">
                            5,000 points from your Amex card expire in 2 months. Use them soon!
                          </div>
                          <Button size="sm" variant="outline">Take Action</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redemption Value Calculator</CardTitle>
                  <CardDescription>Compare redemption options to find the best value</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    {redemptionOptions.map((option) => (
                      <div 
                        key={option.type}
                        className="p-4 border border-border rounded-lg hover:border-primary/40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {option.icon}
                          <span className="font-medium">{option.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">{option.description}</div>
                        <Badge variant="outline" className="border-accent text-accent">
                          {option.multiplier} value
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="redeem" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Redemption Calculator
                  </CardTitle>
                  <CardDescription>Calculate the best way to redeem your points</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Points to Redeem</label>
                        <Input
                          placeholder="Enter points amount"
                          value={redeemAmount}
                          onChange={(e) => setRedeemAmount(e.target.value)}
                          type="number"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Redemption Method</label>
                        <Select value={redeemType} onValueChange={setRedeemType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select redemption type" />
                          </SelectTrigger>
                          <SelectContent>
                            {redemptionOptions.map((option) => (
                              <SelectItem key={option.type} value={option.type}>
                                {option.name} ({option.multiplier})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button onClick={calculateRedemption} variant="hero" className="w-full">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Value
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Best Value Options</h4>
                      {redemptionOptions.slice(0, 3).map((option) => (
                        <div key={option.type} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {option.icon}
                              <span className="font-medium">{option.name}</span>
                            </div>
                            <Badge variant="outline" className="border-accent text-accent">
                              {option.multiplier}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Redemption</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { amount: 25000, value: "$250", type: "Cash Back" },
                      { amount: 50000, value: "$750", type: "Travel Portal" },
                      { amount: 60000, value: "$900", type: "Transfer Partners" }
                    ].map((option, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {option.amount.toLocaleString()}
                        </div>
                        <div className="text-lg font-semibold text-accent mb-2">{option.value}</div>
                        <div className="text-sm text-muted-foreground mb-3">{option.type}</div>
                        <Button size="sm" variant="outline" className="w-full">
                          Redeem Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Rewards Tracking
                  </CardTitle>
                  <CardDescription>Monitor your rewards earning progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Monthly Earning Goal</span>
                        <span className="text-sm text-muted-foreground">8,450 / 10,000 points</span>
                      </div>
                      <Progress value={84.5} className="h-3" />
                      <div className="text-sm text-muted-foreground mt-1">1,550 points to go</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">This Month's Earnings</h4>
                        <div className="space-y-3">
                          {[
                            { category: "Dining", points: 2450, color: "text-accent" },
                            { category: "Grocery", points: 1890, color: "text-primary" },
                            { category: "Gas", points: 1200, color: "text-warning" },
                            { category: "Travel", points: 2910, color: "text-green-500" }
                          ].map((item) => (
                            <div key={item.category} className="flex justify-between">
                              <span className="text-sm">{item.category}</span>
                              <span className={`font-semibold ${item.color}`}>
                                +{item.points.toLocaleString()}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Recent Achievements</h4>
                        <div className="space-y-3">
                          {[
                            { name: "Grocery Guru", description: "Earned 5,000+ points on groceries", icon: "🛒" },
                            { name: "Travel Master", description: "Booked trip using points", icon: "✈️" },
                            { name: "Payment Perfect", description: "6 months no missed payments", icon: "💎" }
                          ].map((achievement, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                              <span className="text-xl">{achievement.icon}</span>
                              <div>
                                <div className="font-medium text-sm">{achievement.name}</div>
                                <div className="text-xs text-muted-foreground">{achievement.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Rewards;