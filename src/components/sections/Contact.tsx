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
<<<<<<< HEAD
        <h2 className="font-display text-4xl font-bold mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Have a role, project, or collaboration in mind? Send the details and I will get back to you.
=======
        <h2 className="font-display text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-lg mx-auto">
          Have a project or question? Fill out the form below and I'll get back to you as soon as possible.
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={onSubmit}
<<<<<<< HEAD
          className="surface-gradient rounded-2xl border p-8 shadow-xl shadow-primary/10 space-y-6 transition-colors duration-300"
        >
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
=======
          className="bg-white dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8 space-y-6 transition-colors duration-300"
        >
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
              Name
            </label>
            <Input
              name="name"
<<<<<<< HEAD
              placeholder="Your name"
              aria-label="Your name"
=======
              placeholder="Your Sweet Name"
              aria-label="Your name"
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
            />
          </div>

          {/* Email */}
          <div>
<<<<<<< HEAD
            <label className="mb-1 block text-sm font-medium">
=======
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
              Email
            </label>
            <Input
              type="email"
              name="email"
<<<<<<< HEAD
              placeholder="you@example.com"
              aria-label="Your email"
=======
              placeholder="yourgmail@gmail.com"
              aria-label="Your email"
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
            />
          </div>

          {/* Message */}
          <div>
<<<<<<< HEAD
            <label className="mb-1 block text-sm font-medium">
=======
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              aria-label="Your message"
<<<<<<< HEAD
=======
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
<<<<<<< HEAD
            className="w-full shadow-lg shadow-primary/20"
=======
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white dark:text-white shadow-lg"
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
