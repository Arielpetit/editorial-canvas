import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{t("newsletterTitle")}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{t("newsletterDescription")}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-secondary/50"
        />
        <Button type="submit" className="w-full">{t("subscribe")}</Button>
      </form>
    </div>
  );
};

export default Newsletter;
