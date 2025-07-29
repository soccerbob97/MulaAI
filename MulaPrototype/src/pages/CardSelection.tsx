import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  CreditCard, 
  Star, 
  TrendingUp,
  Search,
  Filter,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const CardSelection = () => {
  const [location, setLocation] = useState("Whole Foods Market");
  const [category, setCategory] = useState("grocery");
  const [searchQuery, setSearchQuery] = useState("");

  const cardRecommendations = [
    {
      id: 1,
      name: "Chase Sapphire Reserve",
      bank: "Chase",
      multiplier: "5x",
      category: "grocery",
      points: 125,
      annual_fee: "$550",
      color: "from-blue-500 to-blue-600",
      benefits: ["Airport Lounge Access", "Travel Insurance", "No Foreign Transaction Fees"],
      recommended: true
    },
    {
      id: 2,
      name: "American Express Gold Card",
      bank: "Amex",
      multiplier: "4x",
      category: "grocery",
      points: 100,
      annual_fee: "$250",
      color: "from-yellow-500 to-amber-600",
      benefits: ["Dining Credits", "Uber Credits", "Airport Lounge Access"],
      recommended: false
    },
    {
      id: 3,
      name: "Capital One Venture",
      bank: "Capital One",
      multiplier: "2x",
      category: "all",
      points: 50,
      annual_fee: "$95",
      color: "from-red-500 to-red-600",
      benefits: ["Simple Rewards", "Global Entry Credit", "No Foreign Transaction Fees"],
      recommended: false
    },
    {
      id: 4,
      name: "Citi Double Cash",
      bank: "Citi",
      multiplier: "2%",
      category: "all",
      points: 50,
      annual_fee: "$0",
      color: "from-gray-500 to-gray-600",
      benefits: ["No Annual Fee", "Simple Cash Back", "18-Month 0% APR"],
      recommended: false
    }
  ];

  const [cards, setCards] = useState(cardRecommendations);

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
    // Simulate location-based optimization
    const updatedCards = cardRecommendations.map(card => {
      if (newLocation.includes("Restaurant") || newLocation.includes("Dining")) {
        return {
          ...card,
          multiplier: card.name.includes("Gold") ? "4x" : card.multiplier,
          points: card.name.includes("Gold") ? 120 : card.points,
          recommended: card.name.includes("Gold")
        };
      }
      return card;
    });
    setCards(updatedCards);
    toast.success(`Optimized recommendations for ${newLocation}`);
  };

  const handleUseCard = (cardName: string) => {
    toast.success(`Selected ${cardName} for this purchase!`);
  };

  const filteredCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Smart Card Selection
            </h1>
            <p className="text-muted-foreground">AI-powered recommendations for maximum rewards at every location</p>
          </div>

          {/* Location Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Current Location
              </CardTitle>
              <CardDescription>Tell us where you're shopping to get optimized card recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter store name or location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grocery">Grocery</SelectItem>
                    <SelectItem value="dining">Dining</SelectItem>
                    <SelectItem value="gas">Gas Station</SelectItem>
                    <SelectItem value="online">Online Shopping</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={() => handleLocationChange(location)} variant="hero">
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Search and Filter */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search cards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Current Location Display */}
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Currently optimizing for: {location}</span>
            </div>
            <Badge variant="outline" className="border-accent text-accent">
              {category.charAt(0).toUpperCase() + category.slice(1)} Category
            </Badge>
          </div>

          {/* Card Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCards.map((card) => (
              <Card 
                key={card.id} 
                className={`bg-gradient-to-br from-card to-card/50 ${
                  card.recommended ? 'border-accent shadow-lg' : 'border-border'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-8 bg-gradient-to-r ${card.color} rounded`}></div>
                      <div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription>{card.bank}</CardDescription>
                      </div>
                    </div>
                    {card.recommended && (
                      <Badge variant="outline" className="border-accent text-accent bg-accent/10">
                        <Star className="w-3 h-3 mr-1" />
                        Best Choice
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Rewards Info */}
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-muted-foreground">Multiplier for {category}</div>
                          <div className="text-lg font-bold text-accent">{card.multiplier}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Est. points for $25</div>
                          <div className="text-lg font-bold text-primary">+{card.points}</div>
                        </div>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Annual Fee</span>
                        <span className="font-medium">{card.annual_fee}</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <div className="text-sm font-medium mb-2">Key Benefits</div>
                      <div className="space-y-1">
                        {card.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant={card.recommended ? "hero" : "outline"} 
                      className="w-full"
                      onClick={() => handleUseCard(card.name)}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      {card.recommended ? "Use This Card" : "Select Card"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Location Buttons */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Locations</CardTitle>
              <CardDescription>Tap to quickly optimize for popular locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Whole Foods Market",
                  "Target",
                  "Amazon.com",
                  "Shell Gas Station",
                  "Starbucks",
                  "McDonald's",
                  "Best Buy",
                  "Costco"
                ].map((loc) => (
                  <Button
                    key={loc}
                    variant="outline"
                    size="sm"
                    onClick={() => handleLocationChange(loc)}
                    className="text-xs"
                  >
                    {loc}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardSelection;