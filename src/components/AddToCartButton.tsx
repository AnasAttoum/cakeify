import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { product } from "@/constants/types";
import Image from "next/image";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatters";
import { Checkbox } from "./ui/checkbox";

const sizes = [
  { id: crypto.randomUUID(), name: "Enough for 4 people", price: 0 },
  { id: crypto.randomUUID(), name: "Enough for 8 people", price: 4 },
  { id: crypto.randomUUID(), name: "Enough for 12 people", price: 6 },
];

const extras = [
  { id: crypto.randomUUID(), name: "With nuts", price: 2 },
  { id: crypto.randomUUID(), name: "With fruits", price: 4 },
  { id: crypto.randomUUID(), name: "With extra chocolate", price: 6 },
];

export default function AddToCartButton({ product }: { product: product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full my-5">Add To Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-12 mt-5">
          <div>
            <Label htmlFor="size">Pick cake size</Label>
            <PickSize sizes={sizes} product={product} />
          </div>
          <div>
            <Label htmlFor="extra">Any Extras?</Label>
            <Extras extras={extras} product={product} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">Add To Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PickSize({
  sizes,
  product,
}: {
  sizes: {
    id: string;
    name: string;
    price: number;
  }[];
  product: product;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex items-center space-x-2 p-2 text-gray-500">
            <RadioGroupItem value="default" id={size.id} />
            <Label htmlFor={size.id}>
              {size.name} {formatCurrency(size.price + product.basePrice)}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
}

function Extras({
  extras,
  product,
}: {
  extras: {
    id: string;
    name: string;
    price: number;
  }[];
  product: product;
}) {
  return extras.map((extra) => {
    return (
      <div key={extra.id} className="flex items-center space-x-2 p-2">
        <Checkbox id={extra.id} />
        <Label
          htmlFor={extra.id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
        >
          {extra.name}
        </Label>
      </div>
    );
  });
}
