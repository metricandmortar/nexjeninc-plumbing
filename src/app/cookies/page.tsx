import LegalPage from "@/components/sections/LegalPage";
import { COOKIE_POLICY } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: COOKIE_POLICY.title,
  description: COOKIE_POLICY.description,
  path: COOKIE_POLICY.path,
});

export default function CookiesPage() {
  return <LegalPage document={COOKIE_POLICY} />;
}
