import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Mega Man Dual Override Wiki is an independent fan-built guide hub covering stages, Robot Masters, Custom Chips, playable characters, platforms, and essential game knowledge for new and veteran players alike.</p>
      <p>Mega Man Dual Override is developed by Capcom and is expected in Spring 2027. This site is not affiliated with or endorsed by Capcom. For official news, visit <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="https://www.capcom-games.com/megaman/do/en-us/" target="_blank" rel="noopener noreferrer">Capcom&apos;s official game page</a>.</p>
      <p>Site questions can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="mailto:support@megamandualoverride.top">support@megamandualoverride.top</a>.</p>
    </LegalPage>
  );
}
