// components/CardCantiere.tsx
import React from 'react';
import { Cantiere } from '@/components/firebase/types/types';
import { Card, CardContent } from "@/components/ui/card";


interface CardCantiereProps {
  cantiere: Cantiere;
}

const CardCantiere: React.FC<CardCantiereProps> = ({ cantiere }) => {
  return (
    <Card key={cantiere.id}>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">{cantiere.nome}</h2>
        <p className="text-gray-600">Stato: {cantiere.stato}</p>
      </CardContent>
    </Card>
  );
};

export default CardCantiere;
