import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Subscribe to new posts</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Subscribe to our newsletter and we'll send you the emails of latest
        posts.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-secondary/50"
        />
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
