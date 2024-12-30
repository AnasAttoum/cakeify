import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";

export default function BestSellers() {

    const bestSellers = [
      {
        id: crypto.randomUUID(),
        name: "Cake",
        description: "this is a Cake",
        basePrice: 12,
        image: "/assets/images/cake.png",
      },
      {
        id: crypto.randomUUID(),
        name: "Cake",
        description: "this is a Cake",
        basePrice: 12,
        image: "/assets/images/cake.png",
      },
      {
        id: crypto.randomUUID(),
        name: "Cake",
        description: "this is a Cake",
        basePrice: 12,
        image: "/assets/images/cake.png",
      },
    ];

  return (
    <section className="container">
        <Title title="Our Best Sellers" subTitle="CheckOut"/>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bestSellers.map((product)=>{
                return (
                  <ProductCard key={product.id} product={product}/>
                );
            })}
        </ul>
    </section>
  )
}