import LegalPage from "@/components/sections/LegalPage";
import { PRIVACY_POLICY } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.description,
  path: PRIVACY_POLICY.path,
});

export default function PrivacyPage() {
  return <LegalPage document={PRIVACY_POLICY} />;
}
