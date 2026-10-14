import LegalPage from "@/components/sections/LegalPage";
import { TERMS_OF_SERVICE } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: TERMS_OF_SERVICE.title,
  description: TERMS_OF_SERVICE.description,
  path: TERMS_OF_SERVICE.path,
});

export default function TermsPage() {
  return <LegalPage document={TERMS_OF_SERVICE} />;
}
