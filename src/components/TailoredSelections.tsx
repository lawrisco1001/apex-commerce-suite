import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface SelectionItem {
  id: string;
  image: string;
  price: string;
  moq?: string;
}

interface TailoredSelection {
  title: string;
  views: string;
  items: SelectionItem[];
}

interface TailoredSelectionsProps {
  selections: TailoredSelection[];
}

export const TailoredSelections = ({ selections }: TailoredSelectionsProps) => {
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Tailored Selections</h2>
        <Link to="/products" className="text-primary hover:underline text-sm font-medium">
          View more →
        </Link>
      </div>

      <div className="space-y-8">
        {selections.map((selection, idx) => (
          <SelectionRow key={idx} selection={selection} />
        ))}
      </div>
    </section>
  );
};

const SelectionRow = ({ selection }: { selection: TailoredSelection }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-1">{selection.title}</h3>
        <p className="text-sm text-muted-foreground">{selection.views} views</p>
      </div>

      <div className="relative group">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {selection.items.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="flex-shrink-0 w-40 group/item"
            >
              <div className="bg-muted rounded-lg overflow-hidden mb-2 aspect-square">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform"
                />
              </div>
              <div className="font-semibold">{item.price}</div>
              {item.moq && (
                <div className="text-xs text-muted-foreground">{item.moq}</div>
              )}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
