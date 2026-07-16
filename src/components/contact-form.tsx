"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      form.reset();
      setIsSuccess(true);
      setStatusMessage(
        "Thank you. Your enquiry has been sent successfully."
      );
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-xs font-bold uppercase tracking-wider text-gray-700"
          >
            Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full border-b-2 border-gray-300 bg-white p-3 text-gray-900 transition-colors focus:border-[#051024] focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-phone"
            className="text-xs font-bold uppercase tracking-wider text-gray-700"
          >
            Phone
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            className="w-full border-b-2 border-gray-300 bg-white p-3 text-gray-900 transition-colors focus:border-[#051024] focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-xs font-bold uppercase tracking-wider text-gray-700"
        >
          Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full border-b-2 border-gray-300 bg-white p-3 text-gray-900 transition-colors focus:border-[#051024] focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-xs font-bold uppercase tracking-wider text-gray-700"
        >
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full resize-none border-b-2 border-gray-300 bg-white p-3 text-gray-900 transition-colors focus:border-[#051024] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#051024] py-4 font-medium text-white transition-all hover:bg-[#051024]/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? (
          <>
            Sending
            <LoaderCircle className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {statusMessage && (
        <p
          className={`rounded-lg p-3 text-sm ${
            isSuccess
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}