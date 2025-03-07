import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchCantieri } from "../../firebase/firestore"; // Importa la funzione di recupero
import { Cantiere } from "@/components/firebase/types/types"; // Tipo di dati del cantiere
import CardCantiere from "./CardCantiere";

const Overview = () => {
  const [cantieri, setCantieri] = useState<Cantiere[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCantieri = async () => {
      const cantieriData = await fetchCantieri();
      setCantieri(cantieriData);
      setLoading(false);
    };

    loadCantieri();
  }, []);

  const filteredCantieri = filtro
    ? cantieri.filter((cantiere) => cantiere.stato === filtro)
    : cantieri;  
  
  return (
      <>
        <h1 className="text-2xl font-bold">Cantieri</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Filtra per stato:</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            onChange={(e) => setFiltro(e.target.value)}
            value={filtro}
          >
            <option value="">Tutti</option>
            <option value="aperto">Aperti</option>
            <option value="chiuso">Chiusi</option>
            <option value="pianificato">Pianificati</option>
          </select>
        </div>

        {loading ? (
          <div>Caricamento...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredCantieri.length === 0 ? (
              <p className="text-gray-600">Nessun cantiere trovato con il filtro applicato.</p>
            ) : (
              filteredCantieri.map((cantiere) => (
                <CardCantiere key={cantiere.id} cantiere={cantiere} />
              ))
            )}
          </div>
        )}
      </>
    );
};
  
export default Overview;

// import { Card, CardContent } from "@/components/ui/card";

// const Overview = () => {
//     return (
//         <>
//         <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           <Card>
//             <CardContent className="p-4">
//               <h2 className="text-lg font-semibold">Stat 1</h2>
//               <p className="text-gray-600">Some metric here</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <h2 className="text-lg font-semibold">Stat 2</h2>
//               <p className="text-gray-600">Another metric</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardContent className="p-4">
//               <h2 className="text-lg font-semibold">Stat 3</h2>
//               <p className="text-gray-600">A different metric</p>
//             </CardContent>
//           </Card>
//         </div>
//         </>
//     );
// };
  
// export default Overview;