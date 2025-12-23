import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Zap, Trophy } from "lucide-react";

import { HeroStatsCard } from "./HeroStatsCard";

export const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de Personajes
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">16</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              14 Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              2 Villanos
            </Badge>
          </div>
        </CardContent>
      </Card>

      <HeroStatsCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        name="3"
        value="18.8% of total"
      />

      <HeroStatsCard
        title="Fuerza"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        name="Superman"
        value="Fuerza: 10/10"
      />

      <HeroStatsCard
        title="Inteligencia"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        name="Batman"
        value="Inteligencia: 10/10"
      />
    </div>
  );
};
