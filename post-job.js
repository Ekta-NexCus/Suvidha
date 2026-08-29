import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useLang, t, dictionary } from "../../lib/i18n";

const QUANTITY_PRESETS = [1, 2, 5, 10, 20];

export default function PostJob() {
  const { lang } = useLang();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [customQty, setCustomQty] = useState("");
  const [location, setLocation] = useState("");

  const categoriesEn = dictionary.categories.en;
  const categoriesLocal = dictionary.categories[lang];

  function handleSubmit(e) {
    e.preventDefault();
    const finalQty = quantity === "other" ? customQty : quantity;
    // MVP placeholder: this is where we'll write the job to the
    // database and trigger the matching engine once it's built.
    alert(
      `${selectedSkill !== null ? categoriesEn[selectedSkill] : "(no skill)"} · ` +
        `${finalQty || "(no quantity)"} workers · ${location || "(no location)"}`
    );
  }

  return (
    <div className="page">
      <Head>
        <title>{t("employerPostTitle", lang)} — Ekta Nexcus</title>
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

        <h2 style={{ marginBottom: 24 }}>{t("employerPostTitle", lang)}</h2>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>{t("workCategoryQ", lang)}</label>
            <div className="tag-grid">
              {categoriesLocal.map((label, i) => (
                <button
                  type="button"
                  key={i}
                  className={"tag" + (selectedSkill === i ? " selected" : "")}
                  onClick={() => setSelectedSkill(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <label>{t("quantity", lang)}</label>
            <div className="qty-row">
              {QUANTITY_PRESETS.map((n) => (
                <button
                  type="button"
                  key={n}
                  className={"qty-chip" + (quantity === n ? " selected" : "")}
                  onClick={() => setQuantity(n)}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                className={"qty-chip" + (quantity === "other" ? " selected" : "")}
                onClick={() => setQuantity("other")}
              >
                {lang === "mr" ? "इतर" : "Other"}
              </button>
            </div>
            {quantity === "other" && (
              <input
                style={{ marginTop: 12 }}
                type="number"
                min="1"
                placeholder={lang === "mr" ? "संख्या टाका" : "Enter number"}
                value={customQty}
                onChange={(e) => setCustomQty(e.target.value)}
              />
            )}
          </div>

          <div className="field">
            <label>{t("jobLocation", lang)}</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>

          <div className="actions-row">
            <Link href="/" className="btn btn-secondary" style={{ textAlign: "center" }}>
              {t("back", lang)}
            </Link>
            <button type="submit" className="btn btn-primary">
              {t("postJob", lang)}
            </button>
          </div>
        </form>
      </div>

      <footer className="site-footer">Ekta Nexcus · ektanexcus@gmail.com</footer>
    </div>
  );
}
