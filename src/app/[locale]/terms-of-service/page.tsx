import { LegalPage } from "@/components/legal-page";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Game systems, release details, platforms, and update information may change without notice. Always verify important information through Capcom or the official store listing.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Capcom property.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="mailto:support@megamandualoverride.top">support@megamandualoverride.top</a>.</p>
    </LegalPage>
  );
}
