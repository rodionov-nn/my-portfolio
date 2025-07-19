"use client";

import { useState } from "react";
import Container from "../ui/Container";
import { GridBackground } from "../ui/GridBackground";
import { LuCopy, LuCheck } from "react-icons/lu";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rodionov.nmx@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-black text-primary dark:text-primary-dark z-10"
    >
      <GridBackground>
        <Container className="min-h-screen flex flex-col items-center justify-center text-center gap-8 py-16 md:py-32">
          <h1>Contact me</h1>
          <div className="flex flex-col text-md md:text-xl text-justify gap-2 max-w-3xl">
            <h2>You found me on the internet — that&apos;s a start!</h2>
            <div className="font-medium">
              <p className="flex flex-wrap items-center">
                <span className="mr-2">Drop me a message at{" "}</span>
                <span
                  className="group inline-flex items-center hover:text-accent active:scale-95 transition-all duration-300 cursor-pointer"
                  onClick={handleCopy}
                >
                  <span className="overflow-hidden inline-flex items-center transition-all duration-300 w-0 group-hover:w-5 group-hover:mr-2">
                    {copied ? (
                      <LuCheck className="text-green-500 transition-opacity duration-300" />
                    ) : (
                      <LuCopy className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </span>
                  {email}
                </span>
                .
              </p>

              <p>Or connect with me on socials!</p>
            </div>
          </div>
        </Container>
      </GridBackground>
    </section>
  );
}
