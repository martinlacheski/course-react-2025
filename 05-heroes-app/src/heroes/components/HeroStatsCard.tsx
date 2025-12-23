import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  icon: React.ReactNode;
  name: string;
  value: string;
}

export const HeroStatsCard = ({ title, icon, name, value }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold">{name}</div>
        <p className="text-xs text-muted-foreground">{value}</p>
      </CardContent>
    </Card>
  );
};
