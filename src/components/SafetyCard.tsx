import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SafetyCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: "red" | "green" | "orange" | "yellow";
  onClick: () => void;
}

export function SafetyCard({ title, description, icon, color, onClick }: SafetyCardProps) {
  const colorClasses = {
    red: "border-safety-red bg-gradient-to-br from-red-50 to-red-100 hover:from-red-100 hover:to-red-200",
    green: "border-safety-green bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200", 
    orange: "border-safety-orange bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200",
    yellow: "border-safety-yellow bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200"
  };

  return (
    <Card 
      className={`
        p-6 border-2 cursor-pointer transition-all duration-300 
        hover:scale-105 hover:shadow-lg animate-fade-in-up
        ${colorClasses[color]}
      `}
      onClick={onClick}
    >
      <div className="text-center space-y-4">
        <div className="flex justify-center text-6xl animate-bounce-gentle">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Learn More! 🚀
        </Button>
      </div>
    </Card>
  );
}