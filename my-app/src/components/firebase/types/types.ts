import { Timestamp } from "firebase/firestore";

// types.ts (dove definisci i tipi)
export interface Cantiere {
    id: string;
    nome: string;
    stato: string; // 'aperto', 'chiuso', 'pianificato'
    dataCreazione: Timestamp;
    descrizione: string;
    // Altri campi del cantiere
  }
  