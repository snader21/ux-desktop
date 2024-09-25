import React, { createContext, useContext, useState, ReactNode } from "react";

interface Phrase {
  id: number;
  text: string;
  type: "user" | "system";
}

interface PhrasesContextType {
  phrases: Phrase[];
  addPhrase: (text: string) => void;
}

const PhrasesContext = createContext<PhrasesContextType | undefined>(undefined);

export const PhrasesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [phrases, setPhrases] = useState<Phrase[]>([
    { id: 1, text: "Despierta y brilla, el mundo te espera", type: "user" },
    {
      id: 2,
      text: "El esfuerzo de hoy es el éxito del mañana",
      type: "system",
    },
    { id: 2, text: "Hazlo por maggie", type: "system" },
  ]);

  const addPhrase = (text: string) => {
    const newPhrase: Phrase = {
      id: phrases.length + 1,
      text,
      type: "user",
    };
    setPhrases([...phrases, newPhrase]);
  };

  return (
    <PhrasesContext.Provider value={{ phrases, addPhrase }}>
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrases = () => {
  const context = useContext(PhrasesContext);
  if (!context) {
    throw new Error("usePhrases debe usarse dentro de un PhrasesProvider");
  }
  return context;
};
