import polaroid1 from "@/assets/polaroid-1.webp";
import polaroid2 from "@/assets/polaroid-2.webp";
import polaroid3 from "@/assets/polaroid-3.webp";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import RetroImage from "@/components/RetroImage";

const memories = [
  {
    id: 1,
    image: polaroid1,
    title: "Welcome Celebration 2024",
    caption: "A memorable evening",
    likes: 127,
    comments: 23,
    rotation: "rotate-2",
    sticker: "New!"
  },
  {
    id: 2,
    image: polaroid2,
    title: "Music Concert",
    caption: "An inspiring performance",
    likes: 89,
    comments: 15,
    rotation: "-rotate-1",
    sticker: "Popular"
  },
  {
    id: 3,
    image: polaroid3,
    title: "Food Festival",
    caption: "Culinary excellence",
    likes: 156,
    comments: 31,
    rotation: "rotate-1",
    sticker: "Featured"
  }
];

const PolaroidMemories = () => {
  const navigate = useNavigate();

  const handleShare = (memoryTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this memory: ${memoryTitle}`,
        text: `Amazing moment from our college fest: ${memoryTitle}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied! 🔗",
        description: `Share this amazing memory: ${memoryTitle}`,
      });
    }
  };

  const handleViewAll = () => {
    navigate("/golden-moments");
  };
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="retro-handwritten text-retro-purple text-xl mb-4">
            ~ Featured Highlights ~
          </div>
          <h2 className="retro-heading text-4xl md:text-5xl text-foreground mb-6">
            Golden Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive into our curated collection of the most cherished memories from college fests
          </p>
        </div>

        {/* Polaroid Board */}
        <div className="relative">
          {/* Cork Board Background Effect */}
          <div className="bg-sepia-brown/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Pin Effects */}
            <div className="absolute top-4 left-8 w-3 h-3 bg-primary rounded-full shadow-lg"></div>
            <div className="absolute top-4 right-8 w-3 h-3 bg-accent rounded-full shadow-lg"></div>
            <div className="absolute bottom-4 left-8 w-3 h-3 bg-retro-purple rounded-full shadow-lg"></div>
            <div className="absolute bottom-4 right-8 w-3 h-3 bg-vintage-teal rounded-full shadow-lg"></div>

            {/* Polaroid Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {memories.map((memory, index) => (
                <div
                  key={memory.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <RetroImage
                    src={memory.image}
                    alt={memory.title}
                    variant="polaroid"
                    size="full"
                    aspectRatio="square"
                    rotation="random"
                    sticker={memory.sticker}
                    className="animate-fade-in"
                  />
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-2 left-2 right-2 bg-card/80 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{memory.title}</h3>
                    <p className="retro-handwritten text-muted-foreground text-xs mb-2">
                      {memory.caption}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3" />
                          <span>{memory.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{memory.comments}</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="p-1 h-auto"
                        onClick={() => handleShare(memory.title)}
                      >
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -top-4 left-1/3 transform -rotate-12">
              <div className="w-16 h-4 bg-sunset-orange/20 rounded-full"></div>
            </div>
            <div className="hidden lg:block absolute -bottom-2 right-1/4 transform rotate-6">
              <div className="w-20 h-4 bg-vintage-teal/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={handleViewAll}
            className="btn-retro text-white font-medium px-8"
            style={{
              background: 'var(--gradient-vintage)',
              border: 'none'
            }}
          >
            View All Memories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PolaroidMemories;