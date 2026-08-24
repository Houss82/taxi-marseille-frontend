function row(label, value) {
  if (value == null || value === "") return "";
  return `<tr><td style="padding:8px 12px;font-weight:bold;color:#374151;vertical-align:top;width:180px">${label}</td><td style="padding:8px 12px;color:#111827">${value}</td></tr>`;
}

function wrapEmail(title, rows) {
  return `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f3f4f6;margin:0;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1)">
    <div style="background:#0f172a;color:#fff;padding:20px 24px">
      <h1 style="margin:0;font-size:20px">${title}</h1>
      <p style="margin:8px 0 0;opacity:.9;font-size:14px">Taxi Marseille — ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
    </div>
    <table style="width:100%;border-collapse:collapse">${rows}</table>
    <div style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280">
      Répondez directement à cet email pour contacter le client.
    </div>
  </div>
</body>
</html>`;
}

export function formatReservationEmail(data) {
  const telephone = `${data.indicatifPays || "+33"} ${data.telephone || data.phone || ""}`.trim();
  const vehiculeRaw = data.vehicule || data.vehicle || data.typeVehicule || "";
  const vehicule =
    vehiculeRaw === "vito" || vehiculeRaw === "van"
      ? "Mercedes van 8 places"
      : vehiculeRaw === "glc"
        ? "Mercedes SUV"
        : vehiculeRaw || "Non précisé";

  const rows = [
    row("Nom", data.nom || data.name),
    row("Email", data.email || "Non renseigné"),
    row("Téléphone", telephone),
    row("Date", data.date),
    row("Heure", data.heure || data.time),
    row("Départ", data.adresseDepart || data.from),
    row("Arrivée", data.adresseArrivee || data.to),
    row("Passagers", data.nombrePassagers || data.passengers),
    row("Bagages", data.nombreBagages || data.luggage),
    row("Véhicule", vehicule),
    row(
      "Commentaires",
      (data.commentaires || data.notes)?.replace(/\n/g, "<br>")
    ),
  ].join("");

  const nom = data.nom || data.name || "Client";
  const date = data.date || "";
  const heure = data.heure || data.time || "";

  return {
    subject: `🚕 Nouvelle réservation — ${nom} — ${date} ${heure}`.trim(),
    html: wrapEmail("Nouvelle réservation", rows),
    replyTo: data.email || undefined,
  };
}

export function formatContactEmail(data) {
  const rows = [
    row("Nom", data.nom || data.name),
    row("Email", data.email),
    row("Téléphone", data.telephone || data.phone),
    row("Sujet", data.subject || data.service),
    row("Message", (data.message || "")?.replace(/\n/g, "<br>")),
  ].join("");

  return {
    subject: `📩 Contact — ${data.nom || data.name || "Client"}`,
    html: wrapEmail("Nouveau message de contact", rows),
    replyTo: data.email || undefined,
  };
}

export function formatEmailByType(type, data) {
  switch (type) {
    case "reservation":
      return formatReservationEmail(data);
    case "contact":
      return formatContactEmail(data);
    default:
      throw new Error("Type de formulaire invalide");
  }
}
