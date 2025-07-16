import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface SafetyStep {
  id: number;
  text: string;
  emoji: string;
}

interface SafetyScenarioProps {
  title: string;
  scenario: string;
  steps: SafetyStep[];
  onBack: () => void;
  scenarioType: "fire" | "stranger" | "road" | "home";
}

export function SafetyScenario({ title, scenario, steps, onBack, scenarioType }: SafetyScenarioProps) {
  const scenarioColors = {
    fire: "border-safety-red bg-gradient-to-br from-red-50 to-red-100",
    stranger: "border-safety-orange bg-gradient-to-br from-orange-50 to-orange-100", 
    road: "border-safety-green bg-gradient-to-br from-green-50 to-green-100",
    home: "border-safety-yellow bg-gradient-to-br from-yellow-50 to-yellow-100"
  };

  const badgeColors = {
    fire: "bg-safety-red text-white",
    stranger: "bg-safety-orange text-white",
    road: "bg-safety-green text-white", 
    home: "bg-safety-yellow text-white"
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack}
          variant="outline"
          size="lg"
          className="hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Safety Topics
        </Button>
        <Badge className={`text-lg px-4 py-2 ${badgeColors[scenarioType]}`}>
          {title}
        </Badge>
      </div>

      <Card className={`p-8 border-2 ${scenarioColors[scenarioType]} shadow-lg`}>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed bg-white/50 p-4 rounded-lg">
              {scenario}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center text-foreground">
              What Should You Do? 🤔
            </h3>
            
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className="flex items-start gap-4 p-4 bg-white/80 rounded-xl border border-white/50 hover:bg-white/90 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground flex items-center gap-2">
                      <span className="text-2xl">{step.emoji}</span>
                      {step.text}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-safety-green" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-xl">
            <p className="text-xl font-semibold text-primary">
              🌟 Remember: Stay calm and follow these steps! You're a safety superstar! 🌟
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}