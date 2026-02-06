import { Achievement } from "@/lib/types";

interface AchievementRowProps {
  achievement: Achievement;
}

export default function AchievementRow({ achievement }: AchievementRowProps) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 md:gap-8 py-8 transition-colors hover:bg-parchment -mx-8 px-8">
      <div className="font-serif text-3xl md:text-5xl font-light text-charcoal/20">
        {achievement.year}
      </div>
      <div>
        <h3 className="font-serif text-xl font-light text-charcoal">
          {achievement.title}
        </h3>
        <p className="text-sm text-mist mt-2 max-w-xl">
          {achievement.description}
        </p>
      </div>
      <div className="text-sm text-bronze">{achievement.dog}</div>
    </div>
  );
}
