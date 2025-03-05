import * as admin from "firebase-admin";  // 🔹 Corretto l'import
import * as fs from "fs";  // 🔹 Corretto l'import

// Inizializza Firebase Admin SDK
const serviceAccount = JSON.parse(fs.readFileSync("service-account.json", "utf-8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 📌 INSERISCI QUI LE EMAIL DEGLI ADMIN
const adminEmails = ["carico@yopmail.com"];

async function setAdminRole() {
  for (const email of adminEmails) {
    try {
      const user = await admin.auth().getUserByEmail(email);
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });
      console.log(`✅ Impostato ADMIN per: ${email}`);
    } catch (error) {
      console.error(`❌ Errore per ${email}:`, error);
    }
  }
}

setAdminRole();
