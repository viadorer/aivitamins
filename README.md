# AI Poradce pro personalizovanou suplementaci

Pokročilá webová aplikace pro personalizované doporučení vitamínů a doplňků stravy s využitím umělé inteligence, genetické analýzy a vědeckých poznatků.

## 🌟 Funkce

- **Personalizované doporučení**: Algoritmy založené na věku, pohlaví, životním stylu a zdravotním stavu
- **Genetická analýza**: Podpora pro MTHFR, COMT, VDR, APOE polymorfismy
- **Optimalizace časování**: Chronobiologicky optimalizované rozvrhy užívání
- **Sledování pokroku**: Monitoring příznaků a účinnosti suplementace
- **Laboratorní doporučení**: Personalizované návrhy vyšetření
- **Analýza interakcí**: Detekce synergií a negativních interakcí mezi doplňky

## 🚀 Nasazení na GitHub Pages

### Automatické nasazení

1. **Fork nebo clone tohoto repozitáře**
2. **Aktualizujte `package.json`**:
   ```json
   "homepage": "https://VASE_UZIVATELSKE_JMENO.github.io/NAZEV_REPOZITARE"
   ```
3. **Push do main branch** - aplikace se automaticky nasadí pomocí GitHub Actions

### Manuální nasazení

```bash
# Instalace závislostí
npm install

# Build aplikace
npm run build

# Nasazení na GitHub Pages
npm run deploy
```

## 🛠️ Lokální vývoj

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm start

# Aplikace bude dostupná na http://localhost:3000
```

## 📁 Struktura projektu

```
aivitamin/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── AdvancedVitaminAdvisor.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.js
└── README.md
```

## 🔧 Technologie

- **React 18** s TypeScript
- **Tailwind CSS** pro styling
- **Lucide React** pro ikony
- **GitHub Actions** pro automatické nasazení
- **GitHub Pages** pro hosting

## ⚠️ Důležité upozornění

Tato aplikace slouží pouze pro vzdělávací a informační účely. Neposkytuje lékařskou diagnózu ani léčbu. Vždy konzultujte užívání jakýchkoli doplňků stravy s kvalifikovaným zdravotnickým odborníkem.

## 📝 Licence

MIT License - viz LICENSE soubor pro detaily.

## 🤝 Přispívání

Příspěvky jsou vítány! Prosím vytvořte issue nebo pull request.

## 📞 Podpora

Pro otázky nebo problémy vytvořte issue v tomto repozitáři.
