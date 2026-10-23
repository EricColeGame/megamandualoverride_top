import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Mega Man, Mega Man Dual Override, Capcom, and related names, logos, artwork, and media belong to their respective owners.</p>
      <p>Mega Man Dual Override Wiki is an independent, non-official fan guide and is not affiliated with or endorsed by Capcom.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href="mailto:support@megamandualoverride.top">support@megamandualoverride.top</a> for review.</p>
    </LegalPage>
  );
}
