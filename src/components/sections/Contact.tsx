import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      toast({ title: "Please complete all fields." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        { name, email, message },
        { publicKey: "your_public_key" }
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out." });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({ title: "Failed to send", description: "Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl font-bold mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Have a role, project, or collaboration in mind? Send the details and I will get back to you.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={onSubmit}
          className="surface-gradient rounded-2xl border p-8 shadow-xl shadow-primary/10 space-y-6 transition-colors duration-300"
        >
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Name
            </label>
            <Input
              name="name"
              placeholder="Your name"
              aria-label="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              aria-label="Your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              aria-label="Your message"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full shadow-lg shadow-primary/20"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};
