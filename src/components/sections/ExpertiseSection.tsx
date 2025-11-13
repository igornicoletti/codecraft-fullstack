import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { expertiseData } from "@/data/expertise"

export const ExpertiseSection = () => (
  <section id='expertise' className="overflow-hidden py-16 md:py-24">
    <div className="container mx-auto px-4">
      <BentoGrid>
        {expertiseData.map((item, idx) => (
          <BentoGridItem
            key={idx}
            header={item.header}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className={item.className} />
        ))}
      </BentoGrid>
    </div>
  </section>
)
