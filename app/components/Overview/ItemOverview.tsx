import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ItemOverview() {
  const foodItems = [
    {
      name: "Ice Cream",
      description: "Creamy & delicious",
      image: "https://i.postimg.cc/tJ6kD7fv/delicious-ice-cream-with-topping.jpg",
    },
    {
      name: "Burgers",
      description: "Juicy & satisfying",
      image: "https://i.postimg.cc/NFZ8HYj8/double-bacon-cheeseburger.jpg",
    },
    {
      name: "Pizza",
      description: "Hot & cheesy",
      image: "https://i.postimg.cc/ncQGts33/slice-crispy-pizza-with-meat-cheese.jpg",
    },
    {
      name: "Sandwiches",
      description: "Fresh & tasty",
      image: "https://i.postimg.cc/Kzx3CjRs/pexels-anton-porsche-37909-133578.jpg",
    },
    {
      name: "Soft Drinks",
      description: "Cool & refreshing",
      image: "https://i.postimg.cc/5yjyMC1p/pexels-alleksana-4113664.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-card overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Satisfy Your <span className="text-orange-600">Cravings!</span>
              </h1>
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Delicious food delivered right to your door
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className=" bg-orange-500 text-white border-none hover:bg-orange-600 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </Button>
            </div>

            {/* Food Items Grid */}
            <div className="pt-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {foodItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-sans font-semibold text-card-foreground text-sm md:text-base">
                          {item.name}
                        </h3>
                        <p className="font-serif text-xs md:text-sm text-orange-700">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
      </section>
    </div>
  )
}
