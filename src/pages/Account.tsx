import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Heart, Settings, MapPin } from "lucide-react";

const Account = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "Jan 15, 2024",
      status: "Delivered",
      total: 299.99,
      items: 2,
    },
    {
      id: "ORD-2024-002",
      date: "Jan 20, 2024",
      status: "In Transit",
      total: 599.98,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={0} />

      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Account</h1>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="orders">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="addresses">
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders" className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{order.id}</CardTitle>
                        <CardDescription>{order.date}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary text-xl">
                          ${order.total.toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {order.items} items
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-success/10 text-success"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {order.status}
                      </span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                  <CardDescription>
                    Save items you love for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-8">
                    Your wishlist is empty
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                  <CardDescription>
                    Manage your shipping addresses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">Home</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Default
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full">Add New Address</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-lg"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <Button variant="hero">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Account;
