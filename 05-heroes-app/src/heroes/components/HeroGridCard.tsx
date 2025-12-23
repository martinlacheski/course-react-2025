import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react";

export const HERO_BADGE = {
  HERO: "Hero",
  ANTI_HERO: "Anti-Hero",
  VILLAIN: "Villain",
} as const;

export type HeroBadgeType = (typeof HERO_BADGE)[keyof typeof HERO_BADGE];

interface HeroBadgeProps {
  type: HeroBadgeType;
}

function HeroBadge({ type }: HeroBadgeProps) {
  if (type === HERO_BADGE.HERO) {
    return (
      <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
        {type}
      </Badge>
    );
  }

  if (type === HERO_BADGE.ANTI_HERO) {
    return (
      <Badge className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">
        {type}
      </Badge>
    );
  }

  return (
    <Badge className="text-xs bg-red-100 text-red-800 border-red-200">
      {type}
    </Badge>
  );
}

interface Props {
  image: string;
  type: HeroBadgeType;
  state: string;
  hero: string;
  name: string;
  universe: string;
  description: string;
  strength: number;
  intelligence: number;
  speed: number;
  durability: number;
  powers: string[];
  firstAppearance: string;
}

export const HeroGridCard = ({
  image,
  type,
  state,
  hero,
  name,
  universe,
  description,
  strength,
  intelligence,
  speed,
  durability,
  powers,
  firstAppearance,
}: Props) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={hero}
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <Badge
            variant="secondary"
            className="text-xs bg-white/90 text-gray-700"
          >
            {state}
          </Badge>
        </div>

        {/* Universe badge */}
        <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
          {universe}
        </Badge>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>

        {/* View details button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">{hero}</h3>
            <p className="text-sm text-gray-600">{name}</p>
          </div>
          <HeroBadge type={type} />
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          {universe}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Fuerza</span>
            </div>
            <Progress value={strength} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Inteligencia</span>
            </div>
            <Progress value={intelligence} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Velocidad</span>
            </div>
            <Progress value={speed} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durabilidad</span>
            </div>
            <Progress value={durability} className="h-2" />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Poderes:</h4>
          <div className="flex flex-wrap gap-1">
            {powers.map((power, index) => (
              <Badge variant="outline" className="text-xs" key={index}>
                {power}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">
          Primera aparición: <strong>{firstAppearance}</strong>
        </div>
      </CardContent>
    </Card>
  );
};
