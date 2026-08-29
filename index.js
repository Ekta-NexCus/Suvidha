import Link from "next/link";
import Head from "next/head";
import { useLang, t } from "../lib/i18n";

export default function Home() {
  const { lang, setLang } = useLang();

  return (
    <div className="page">
      <Head>
        <title>Ekta Nexcus | एकता नेक्सस</title>
      </Head>

      <div className="topbar">
        <a href="/" className="brand">
          <span className="brand-mark">EN</span>
          {t("appName", lang)}
        </a>
        <div className="lang-toggle">
          <button
            className={lang === "mr" ? "active" : ""}
            onClick={() => setLang("mr")}
          >
            मराठी
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            English
          </button>
        </div>
      </div>

      <div className="hero">
        <h1>{t("appName", lang)}</h1>
        <p>{t("tagline", lang)}</p>
      </div>

      <div className="choice-grid">
        <Link href="/worker/register" className="choice-card worker">
          <span className="choice-icon">👷</span>
          <span className="choice-label">{t("needWork", lang)}</span>
        </Link>
        <Link href="/employer/post-job" className="choice-card employer">
          <span className="choice-icon">🏢</span>
          <span className="choice-label">{t("needWorkers", lang)}</span>
        </Link>
      </div>

      <div className="secondary-row">
        <a className="pill-link" href="#">📍 {t("jobsNearMe", lang)}</a>
        <a className="pill-link" href="#">🙍 {t("myProfile", lang)}</a>
        <a className="pill-link" href="#">❓ {t("help", lang)}</a>
      </div>

      <footer className="site-footer">Ekta Nexcus · ektanexcus@gmail.com</footer>
    </div>
  );
}
