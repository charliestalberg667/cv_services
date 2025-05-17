"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Appointment() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sphere1Position, setSphere1Position] = useState({ x: 0, y: 0 });
  const [sphere2Position, setSphere2Position] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateSpherePositions = () => {
      // Sphere 1: Circular motion around cursor
      const time = Date.now() * 0.001;
      const radius = 150;
      setSphere1Position({
        x: mousePosition.x + Math.cos(time) * radius,
        y: mousePosition.y + Math.sin(time) * radius,
      });

      // Sphere 2: Figure-eight motion
      const time2 = Date.now() * 0.0008;
      const radius2 = 200;
      setSphere2Position({
        x: mousePosition.x + Math.sin(time2) * radius2,
        y: mousePosition.y + Math.sin(time2 * 2) * radius2 * 0.5,
      });
    };

    const animationFrame = requestAnimationFrame(updateSpherePositions);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  const content = {
    fr: {
      title: "Prenez rendez-vous",
      description: "Planifiez une consultation pour vos besoins en énergie solaire.",
      nameLabel: "Nom",
      prenomLabel: "Prénom",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      submitButton: "Envoyer",
      successMessage: "Votre demande a été envoyée avec succès !",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
    },
    nl: {
      title: "Maak een afspraak",
      description: "Plan een consultatie voor uw zonne-energiebehoeften.",
      nameLabel: "Naam",
      prenomLabel: "Voornaam",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      addressLabel: "Adres",
      submitButton: "Verzenden",
      successMessage: "Uw aanvraag is succesvol verzonden!",
      errorMessage: "Er is een fout opgetreden. Probeer het opnieuw.",
    },
  };

  const {
    title,
    description,
    nameLabel,
    prenomLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    submitButton,
    successMessage,
    errorMessage,
  } = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          prenom,
          email,
          phone,
          address,
        }),
      });

      if (response.ok) {
        toast({
          title: successMessage,
          description: "We will contact you soon.",
        });
        setName("");
        setPrenom("");
        setEmail("");
        setPhone("");
        setAddress("");
      } else {
        toast({ title: errorMessage, description: "Something went wrong." });
      }
    } catch {
      toast({
        title: errorMessage,
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative overflow-hidden">
      {/* Dynamic Spheres */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full bg-[#17158A]/10 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${sphere1Position.x}px`,
          top: `${sphere1Position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="fixed w-[300px] h-[300px] rounded-full bg-[#aaaaff]/10 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${sphere2Position.x}px`,
          top: `${sphere2Position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="bg-white/10 p-8 border border-white/20 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[8px] max-w-lg w-full h-auto m-7 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-[#17158A] mb-4">{title}</h1>
            <p className="text-lg text-[#17158A]/80">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder={nameLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/20 border border-white/30 rounded-full px-4 py-3 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out placeholder:text-[#17158A]/60"
            />

            <Input
              placeholder={prenomLabel}
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
              className="bg-white/20 border border-white/30 rounded-full px-4 py-3 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out placeholder:text-[#17158A]/60"
            />

            <Input
              placeholder={emailLabel}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border border-white/30 rounded-full px-4 py-3 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out placeholder:text-[#17158A]/60"
            />

            <Input
              placeholder={phoneLabel}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-white/20 border border-white/30 rounded-full px-4 py-3 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out placeholder:text-[#17158A]/60"
            />

            <Input
              placeholder={addressLabel}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="bg-white/20 border border-white/30 rounded-full px-4 py-3 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 ease-in-out placeholder:text-[#17158A]/60"
            />

            <Button
              type="submit"
              className="bg-[#17158A]/90 hover:bg-[#17158A] text-white w-full py-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#17158A]/50 shadow-lg hover:shadow-xl"
            >
              {submitButton} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}