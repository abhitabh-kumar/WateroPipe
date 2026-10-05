"use client";

import { useState } from "react";
import { getContact } from "@/lib/data";

const contact = getContact();

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-900">🎉 Thank You!</p>
        <p className="mt-2 text-sm text-green-800">
          Your form has been submitted successfully. Our team will connect with you within 12–24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      {contact.formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-stone-800">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={4}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none ring-[#e53e3e] focus:ring-2"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none ring-[#e53e3e] focus:ring-2"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full rounded-full bg-[#1a202c] py-3 text-sm font-semibold text-white hover:bg-black md:w-auto md:px-10"
      >
        {contact.submitLabel}
      </button>
    </form>
  );
}
