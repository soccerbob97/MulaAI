import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Bell, 
  CreditCard, 
  DollarSign,
  Clock,
  AlertTriangle,
  CheckCircle,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const Payments = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      type: "Credit Card",
      name: "Chase Sapphire Reserve",
      amount: "$1,240",
      dueDate: "2024-02-15",
      status: "upcoming",
      autoReminder: true,
      daysBefore: 3
    },
    {
      id: 2,
      type: "Credit Card",
      name: "Amex Gold Card",
      amount: "$856",
      dueDate: "2024-02-18",
      status: "upcoming",
      autoReminder: true,
      daysBefore: 5
    },
    {
      id: 3,
      type: "Rent",
      name: "Monthly Rent",
      amount: "$2,100",
      dueDate: "2024-02-01",
      status: "paid",
      autoReminder: true,
      daysBefore: 7
    },
    {
      id: 4,
      type: "Utilities",
      name: "Electric Bill",
      amount: "$89",
      dueDate: "2024-02-20",
      status: "overdue",
      autoReminder: false,
      daysBefore: 2
    }
  ]);

  const [newReminder, setNewReminder] = useState({
    type: "",
    name: "",
    amount: "",
    dueDate: "",
    daysBefore: 3
  });

  const addReminder = () => {
    if (!newReminder.name || !newReminder.amount || !newReminder.dueDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    const reminder = {
      id: reminders.length + 1,
      ...newReminder,
      status: "upcoming",
      autoReminder: true
    };

    setReminders([...reminders, reminder]);
    setNewReminder({ type: "", name: "", amount: "", dueDate: "", daysBefore: 3 });
    toast.success("Payment reminder added successfully!");
  };

  const markAsPaid = (id: number) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, status: "paid" } : reminder
    ));
    toast.success("Payment marked as paid!");
  };

  const deleteReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
    toast.success("Reminder deleted");
  };

  const toggleAutoReminder = (id: number) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, autoReminder: !reminder.autoReminder } : reminder
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "border-green-500 text-green-500 bg-green-500/10";
      case "overdue": return "border-red-500 text-red-500 bg-red-500/10";
      case "upcoming": return "border-yellow-500 text-yellow-500 bg-yellow-500/10";
      default: return "border-gray-500 text-gray-500 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <CheckCircle className="w-4 h-4" />;
      case "overdue": return <AlertTriangle className="w-4 h-4" />;
      case "upcoming": return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Payment Manager
            </h1>
            <p className="text-muted-foreground">Never miss a payment with intelligent reminders and tracking</p>
          </div>

          <Tabs defaultValue="reminders" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="reminders">Reminders</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="add">Add New</TabsTrigger>
            </TabsList>

            <TabsContent value="reminders" className="space-y-6">
              {/* Summary Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/50 border-yellow-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      Upcoming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-500">
                      {reminders.filter(r => r.status === "upcoming").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Payments due soon</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-red-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Overdue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-500">
                      {reminders.filter(r => r.status === "overdue").length}
                    </div>
                    <div className="text-sm text-muted-foreground">Requires attention</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/50 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Paid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">
                      {reminders.filter(r => r.status === "paid").length}
                    </div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment List */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Payment Reminders
                  </CardTitle>
                  <CardDescription>Manage your upcoming payments and reminders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reminders.map((reminder) => (
                      <div key={reminder.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-background/50">
                            {reminder.type === "Credit Card" ? (
                              <CreditCard className="w-5 h-5 text-primary" />
                            ) : (
                              <DollarSign className="w-5 h-5 text-accent" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{reminder.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {reminder.type} • Due {reminder.dueDate}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-semibold">{reminder.amount}</div>
                            <Badge variant="outline" className={getStatusColor(reminder.status)}>
                              {getStatusIcon(reminder.status)}
                              <span className="ml-1 capitalize">{reminder.status}</span>
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={reminder.autoReminder}
                              onCheckedChange={() => toggleAutoReminder(reminder.id)}
                            />
                            {reminder.status === "upcoming" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markAsPaid(reminder.id)}
                              >
                                Mark Paid
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteReminder(reminder.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Payment Schedule
                  </CardTitle>
                  <CardDescription>View your payment calendar for the month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, weekIndex) => (
                      <div key={week} className="p-4 border border-border rounded-lg">
                        <h4 className="font-semibold mb-3">{week}</h4>
                        <div className="grid md:grid-cols-7 gap-2">
                          {[...Array(7)].map((_, dayIndex) => {
                            const dayNumber = weekIndex * 7 + dayIndex + 1;
                            const hasPayment = reminders.some(r => 
                              new Date(r.dueDate).getDate() === dayNumber
                            );
                            
                            return (
                              <div 
                                key={dayIndex}
                                className={`p-2 text-center rounded ${
                                  hasPayment 
                                    ? 'bg-primary/10 border border-primary/20 text-primary' 
                                    : 'bg-muted/50'
                                }`}
                              >
                                <div className="text-sm font-medium">{dayNumber}</div>
                                {hasPayment && (
                                  <div className="text-xs mt-1">Payment</div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="add" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5 text-primary" />
                    Add Payment Reminder
                  </CardTitle>
                  <CardDescription>Create a new payment reminder to stay on track</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="type">Payment Type</Label>
                        <Select value={newReminder.type} onValueChange={(value) => setNewReminder({...newReminder, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Credit Card">Credit Card</SelectItem>
                            <SelectItem value="Rent">Rent</SelectItem>
                            <SelectItem value="Mortgage">Mortgage</SelectItem>
                            <SelectItem value="Utilities">Utilities</SelectItem>
                            <SelectItem value="Insurance">Insurance</SelectItem>
                            <SelectItem value="Loan">Loan</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="name">Payment Name</Label>
                        <Input
                          id="name"
                          placeholder="e.g., Chase Sapphire Reserve"
                          value={newReminder.name}
                          onChange={(e) => setNewReminder({...newReminder, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                          id="amount"
                          placeholder="$0.00"
                          value={newReminder.amount}
                          onChange={(e) => setNewReminder({...newReminder, amount: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="dueDate">Due Date</Label>
                        <Input
                          id="dueDate"
                          type="date"
                          value={newReminder.dueDate}
                          onChange={(e) => setNewReminder({...newReminder, dueDate: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="daysBefore">Remind me (days before)</Label>
                        <Select 
                          value={newReminder.daysBefore.toString()} 
                          onValueChange={(value) => setNewReminder({...newReminder, daysBefore: parseInt(value)})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 day before</SelectItem>
                            <SelectItem value="2">2 days before</SelectItem>
                            <SelectItem value="3">3 days before</SelectItem>
                            <SelectItem value="5">5 days before</SelectItem>
                            <SelectItem value="7">1 week before</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button onClick={addReminder} variant="hero" className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Reminder
                      </Button>
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

export default Payments;