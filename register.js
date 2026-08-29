import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useLang, t, dictionary } from "../../lib/i18n";

export default function WorkerRegister() {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [village, setVillage] = useState("");
  const [city, setCity] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const categoriesEn = dictionary.categories.en;
  const categoriesLocal = dictionary.categories[lang];

  function toggleSkill(index) {
    setSelectedSkills((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // MVP placeholder: this is where we'll call the Supabase database
    // once the backend is connected. For now it just confirms the data
    // was captured correctly on this screen.
    alert(
      `${name || "(no name)"} · ${mobile || "(no mobile)"} · ` +
        `${selectedSkills.map((i) => categoriesEn[i]).join(", ") || "(no skills selected)"}`
    );
  }

  return (
    <div className="page">
      <Head>
        <title>{t("workerRegTitle", lang)} — Ekta Nexcus</title>
      </Head>

      <div className="topbar">
        <Link href="/" className="brand">
          <span className="brand-mark">EN</span>
          {t("appName", lang)}
        </Link>
      </div>

      <div className="form-shell">
        <div className="step-indicator">
          <div className="step-dot active">1</div>
          <div className="step-line" />
          <div className="step-dot">2</div>
          <div className="step-line" />
          <div className="step-dot">3</div>
        </div>

        <h2 style={{ marginBottom: 24 }}>{t("workerRegTitle", lang)}</h2>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>{t("fullName", lang)}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="field">
            <label>{t("mobileNumber", lang)}</label>
            <input
              type="tel"
              inputMode="numeric"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>{t("age", lang)}</label>
            <input
              type="number"
              min="14"
              max="100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="field">
            <label>{t("village", lang)}</label>
            <input value={village} onChange={(e) => setVillage(e.target.value)} />
          </div>

          <div className="field">
            <label>{t("city", lang)}</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          </div>

          <div className="field">
            <label>{t("workCategoryQ", lang)}</label>
            <div className="tag-grid">
              {categoriesLocal.map((label, i) => (
                <button
                  type="button"
                  key={i}
                  className={"tag" + (selectedSkills.includes(i) ? " selected" : "")}
                  onClick={() => toggleSkill(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="actions-row">
            <Link href="/" className="btn btn-secondary" style={{ textAlign: "center" }}>
              {t("back", lang)}
            </Link>
            <button type="submit" className="btn btn-primary">
              {t("next", lang)}
            </button>
          </div>
        </form>
      </div>

      <footer className="site-footer">Ekta Nexcus · ektanexcus@gmail.com</footer>
    </div>
  );
}
