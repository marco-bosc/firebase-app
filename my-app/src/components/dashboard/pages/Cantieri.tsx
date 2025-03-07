// pages/Cantiere.tsx
import React, { useEffect, useState } from 'react';
import { fetchCantieri } from '../../firebase/firestore' // Importa la funzione di recupero
import { Cantiere } from '@/components/firebase/types/types'; // Tipo di dati del cantiere
import CardCantiere from './CardCantiere'; // Componente per visualizzare il cantiere

const CantierePage: React.FC = () => {
  const [cantieri, setCantieri] = useState<Cantiere[]>([]); // Stato per i cantieri
  const [filtro, setFiltro] = useState<string>(''); // Stato per il filtro (aperti, chiusi, pianificati)
  const [loading, setLoading] = useState<boolean>(true); // Stato per il caricamento

  // Carica i cantieri dal database Firestore
  useEffect(() => {
    const loadCantieri = async () => {
      const cantieriData = await fetchCantieri(); // Recupera tutti i cantieri
      setCantieri(cantieriData);
      setLoading(false);
    };

    loadCantieri();
  }, []);

  // Funzione per filtrare i cantieri in base allo stato selezionato
  const filteredCantieri = filtro
    ? cantieri.filter((cantiere) => cantiere.stato === filtro)
    : cantieri; // Se il filtro è vuoto, restituisci tutti i cantieri

  if (loading) return <div>Caricamento...</div>;

  return (
    <div>
      <h1>Elenco Cantieri</h1>

      {/* Filtro per stato */}
      <div>
        <label>Filtra per stato:</label>
        <select onChange={(e) => setFiltro(e.target.value)} value={filtro}>
          <option value="">Tutti</option>
          <option value="aperto">Aperti</option>
          <option value="chiuso">Chiusi</option>
          <option value="pianificato">Pianificati</option>
        </select>
      </div>

      {/* Visualizzazione non filtrata */}
      <div>
        <h2>Lista Completa</h2>
        {cantieri.length === 0 ? (
          <p>Nessun cantiere trovato.</p>
        ) : (
          cantieri.map((cantiere) => (
            <CardCantiere key={cantiere.id} cantiere={cantiere} />
          ))
        )}
      </div>

      {/* Visualizzazione filtrata */}
      <div>
        <h2>Lista Filtrata</h2>
        {filteredCantieri.length === 0 ? (
          <p>Nessun cantiere trovato con il filtro applicato.</p>
        ) : (
          filteredCantieri.map((cantiere) => (
            <CardCantiere key={cantiere.id} cantiere={cantiere} />
          ))
        )}
      </div>
    </div>
  );
};

export default CantierePage;
