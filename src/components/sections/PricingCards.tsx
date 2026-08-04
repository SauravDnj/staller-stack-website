import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { pricingPlans } from "@/content/pricing";

export function PricingCards() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <RevealItem key={plan.name} className={plan.highlighted ? "lg:-mt-4" : ""}>
          <TiltCard
            strength={5}
            className={`flex h-full flex-col ${
              plan.highlighted ? "border-ss-teal bg-ss-surface" : ""
            }`}
          >
            {plan.badge && (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-ss-teal px-3 py-1 font-mono text-xs uppercase tracking-wider text-ss-base">
                {plan.badge}
              </span>
            )}
            <p className="font-display text-lg font-semibold text-ss-text">
              {plan.name}
            </p>
            <p className="mt-1 text-sm text-ss-muted">{plan.tagline}</p>
            <p className="mt-6 font-display text-3xl font-semibold text-ss-mint">
              {plan.price}
              <span className="text-sm font-normal text-ss-muted">
                {" "}
                / per month
              </span>
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-ss-muted"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              variant={plan.highlighted ? "primary" : "outline"}
              className="mt-8 w-full justify-center"
            >
              Choose Plan <span aria-hidden>→</span>
            </Button>
          </TiltCard>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
