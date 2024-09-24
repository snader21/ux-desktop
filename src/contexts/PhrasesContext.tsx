import React, { createContext, useContext, useState, ReactNode, ReactElement } from 'react';

interface Phrase {
  id: number;
  text: string;
  type: 'user' | 'system';
}

interface PhrasesContextType {
  phrases: Phrase[];
}

const PhrasesContext = createContext<PhrasesContextType | undefined>(undefined);


export const PhrasesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [phrases] = useState<Phrase[]>([
    { id: 1, text: "Despierta y brilla, el mundo te espera", type: 'user' },
    { id: 2, text: "El esfuerzo de hoy es el éxito del mañana", type: 'system' },
    { id: 2, text: "Hazlo por maggie", type: 'system' },
  ]);

  return (
    <PhrasesContext.Provider value={{ phrases }}>
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrases = () => {
  const context = useContext(PhrasesContext);
  if (!context) {
    throw new Error('usePhrases debe usarse dentro de un PhrasesProvider');
  }
  return context;
};