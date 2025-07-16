import { useState } from "react";
import { SafetyCard } from "@/components/SafetyCard";
import { SafetyScenario } from "@/components/SafetyScenario";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import safetyHero from "@/assets/safety-hero.jpg";

type ScenarioType = "fire" | "stranger" | "road" | "home" | null;

const safetyScenarios = {
  fire: {
    title: "Fire Safety",
    scenario: "Oh no! You smell smoke and see flames in your house. The fire alarm is beeping loudly!",
    steps: [
      { id: 1, text: "Stay low and crawl under the smoke", emoji: "🐢" },
      { id: 2, text: "Feel doors with the back of your hand before opening", emoji: "✋" },
      { id: 3, text: "Get out of the house quickly and safely", emoji: "🏃‍♂️" },
      { id: 4, text: "Go to your family meeting place", emoji: "🏠" },
      { id: 5, text: "Call 911 or ask an adult to call", emoji: "📞" },
      { id: 6, text: "Never go back inside for toys or pets", emoji: "🚫" }
    ]
  },
  stranger: {
    title: "Stranger Safety",
    scenario: "A person you don't know approaches you while you're playing outside and asks you to come with them.",
    steps: [
      { id: 1, text: "Say 'NO' loudly and clearly", emoji: "🗣️" },
      { id: 2, text: "Run away to a safe place with people", emoji: "🏃‍♀️" },
      { id: 3, text: "Tell a trusted adult right away", emoji: "👩‍👧‍👦" },
      { id: 4, text: "Remember: Never go anywhere with strangers", emoji: "🚫" },
      { id: 5, text: "If grabbed, scream 'This is not my parent!'", emoji: "😱" },
      { id: 6, text: "Trust your feelings - if something feels wrong, it is", emoji: "💭" }
    ]
  },
  road: {
    title: "Road Safety", 
    scenario: "You need to cross the street to get to the playground on the other side.",
    steps: [
      { id: 1, text: "Stop at the curb or edge of the road", emoji: "✋" },
      { id: 2, text: "Look left, then right, then left again", emoji: "👀" },
      { id: 3, text: "Listen for cars, trucks, or other vehicles", emoji: "👂" },
      { id: 4, text: "Wait for all vehicles to stop completely", emoji: "🚗" },
      { id: 5, text: "Walk, don't run, across the street", emoji: "🚶‍♂️" },
      { id: 6, text: "Keep looking and listening while crossing", emoji: "👁️" }
    ]
  },
  home: {
    title: "Home Safety",
    scenario: "You're home alone for a few minutes and you hear the doorbell ring. Someone is knocking on the door.",
    steps: [
      { id: 1, text: "Never open the door to strangers", emoji: "🚪" },
      { id: 2, text: "Look through the peephole or window safely", emoji: "👁️" },
      { id: 3, text: "If you don't know them, don't answer", emoji: "🤫" },
      { id: 4, text: "Call a trusted adult or neighbor", emoji: "📱" },
      { id: 5, text: "Know your address and phone number", emoji: "🏠" },
      { id: 6, text: "Keep doors and windows locked", emoji: "🔒" }
    ]
  }
};

const Index = () => {
  const [currentScenario, setCurrentScenario] = useState<ScenarioType>(null);

  if (currentScenario) {
    const scenario = safetyScenarios[currentScenario];
    return (
      <SafetyScenario
        title={scenario.title}
        scenario={scenario.scenario}
        steps={scenario.steps}
        onBack={() => setCurrentScenario(null)}
        scenarioType={currentScenario}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary to-primary-glow text-white shadow-2xl animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce-gentle">
                Safety Superheroes! 🦸‍♂️
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed">
                Learn how to stay safe in different situations! 
                Click on each topic to become a safety expert! ⭐
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={safetyHero} 
                alt="Safety Hero Mascot" 
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg animate-pulse-glow"
              />
            </div>
          </div>
        </Card>

        {/* Safety Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <SafetyCard
            title="🔥 Fire Safety"
            description="Learn what to do if there's a fire in your home. Stop, drop, and roll!"
            icon="🔥"
            color="red"
            onClick={() => setCurrentScenario("fire")}
          />
          
          <SafetyCard
            title="👤 Stranger Safety"
            description="Know how to stay safe around people you don't know. Trust your instincts!"
            icon="👤"
            color="orange"
            onClick={() => setCurrentScenario("stranger")}
          />
          
          <SafetyCard
            title="🚦 Road Safety"
            description="Learn the right way to cross streets and stay safe around cars!"
            icon="🚦"
            color="green"
            onClick={() => setCurrentScenario("road")}
          />
          
          <SafetyCard
            title="🏠 Home Safety"
            description="Stay safe when you're at home. Know the rules and emergency numbers!"
            icon="🏠"
            color="yellow"
            onClick={() => setCurrentScenario("home")}
          />
        </div>

        {/* Fun Facts Section */}
        <Card className="p-6 bg-gradient-to-r from-accent/20 to-secondary/20 border-2 border-accent/30 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            🌟 Safety Super Facts! 🌟
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-3xl mb-2">📞</div>
              <p className="text-lg font-semibold">Always know your phone number and address!</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <p className="text-lg font-semibold">Choose trusted adults you can talk to!</p>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-3xl mb-2">🧠</div>
              <p className="text-lg font-semibold">Trust your feelings - you're smart!</p>
            </div>
          </div>
        </Card>

        {/* Emergency Numbers */}
        <Card className="p-6 bg-gradient-to-r from-safety-red/20 to-safety-red/10 border-2 border-safety-red/30 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-center text-foreground mb-4">
            🚨 Important Numbers to Remember 🚨
          </h2>
          <div className="text-center space-y-2">
            <p className="text-xl font-semibold">Emergency: 911</p>
            <p className="text-lg text-muted-foreground">Ask a grown-up to help you practice calling!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
