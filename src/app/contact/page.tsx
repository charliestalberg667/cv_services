"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const content = {
    fr: {
      title: "Contactez-nous",
      description:
        "Nous sommes là pour répondre à vos questions sur l'énergie solaire.",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Envoyer",
      successMessage: "Votre message a été envoyé avec succès !",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      contactInfo: {
        title: "Informations de contact",
        email: "spl@solarstock.be",
        phone: "+32 (0)2 241 08 00",
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique",
      },
    },
    nl: {
      title: "Neem contact met ons op",
      description:
        "We zijn hier om uw vragen over zonne-energie te beantwoorden.",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      messageLabel: "Bericht",
      submitButton: "Verzenden",
      successMessage: "Uw bericht is succesvol verzonden!",
      errorMessage: "Er is een fout opgetreden. Probeer het opnieuw.",
      contactInfo: {
        title: "Contactinformatie",
        email: "spl@solarstock.be",
        phone: "+32 (0)2 241 08 00",
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique",
      },
    },
  };

  const {
    title,
    description,
    nameLabel,
    emailLabel,
    messageLabel,
    submitButton,
    successMessage,
    errorMessage,
    contactInfo,
  } = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: successMessage,
          description: "Thank you for reaching out!",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        toast({
          title: errorMessage,
          description: errorData.message || "Something went wrong.",
        });
      }
    } catch {
      toast({
        title: errorMessage,
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{contactInfo.title}</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-800 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-800 hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactInfo.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  {contactInfo.address}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {nameLabel}
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-10 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {emailLabel}
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  />
                  <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {messageLabel}
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full pl-10 bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                  />
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                {submitButton} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
