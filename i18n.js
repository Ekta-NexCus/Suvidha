import { createContext, useContext, useEffect, useState } from "react";

// All interface text lives here in one place. To add a new page,
// add a new key with both an "en" and "mr" version.
export const dictionary = {
  appName: { en: "Ekta Nexcus", mr: "एकता नेक्सस" },
  tagline: {
    en: "A trusted platform connecting people who need work with people who need workers.",
    mr: "कामाची गरज आणि कामगार यांना विश्वासाने जोडणारे व्यासपीठ",
  },
  needWork: { en: "I need work", mr: "मला काम हवे आहे" },
  needWorkers: { en: "I need workers", mr: "मला कामगार हवा आहे" },
  jobsNearMe: { en: "Jobs near me", mr: "जवळची कामे" },
  myProfile: { en: "My profile", mr: "माझे प्रोफाइल" },
  help: { en: "Help", mr: "मदत" },
  back: { en: "Back", mr: "मागे" },
  next: { en: "Next", mr: "पुढे" },
  submit: { en: "Save", mr: "जतन करा" },

  // Worker registration
  workerRegTitle: { en: "Tell us about yourself", mr: "तुमची माहिती द्या" },
  fullName: { en: "Full name", mr: "पूर्ण नाव" },
  mobileNumber: { en: "Mobile number", mr: "मोबाईल नंबर" },
  age: { en: "Age", mr: "वय" },
  village: { en: "Village / area", mr: "गाव / भाग" },
  city: { en: "City", mr: "शहर" },
  workCategoryQ: { en: "What work can you do?", mr: "तुम्हाला कोणते काम येते?" },

  // Employer job post
  employerPostTitle: { en: "What workers do you need?", mr: "तुम्हाला कोणत्या प्रकारचे कामगार हवे आहेत?" },
  quantity: { en: "How many workers?", mr: "कामगार किती हवेत?" },
  jobLocation: { en: "Job location", mr: "कामाचे ठिकाण" },
  postJob: { en: "Post job", mr: "कामाची जाहिरात पोस्ट करा" },

  categories: {
    en: ["Housekeeping", "Cleaning", "Cooking", "Gardening", "Security", "Construction", "Carpenter", "Electrician", "Plumber", "Painter", "Driver", "Delivery", "Agriculture", "Factory worker", "Office support", "Other"],
    mr: ["घरकाम", "स्वच्छता", "स्वयंपाक", "बागकाम", "सुरक्षा", "बांधकाम", "सुतार", "इलेक्ट्रिशियन", "प्लंबर", "रंगारी", "ड्रायव्हर", "डिलिव्हरी", "शेती", "कारखाना कामगार", "ऑफिस सपोर्ट", "इतर"],
  },
};

export function t(key, lang) {
  const entry = dictionary[key];
  if (!entry) return key;
  return entry[lang] ?? entry.en;
}

const LangContext = createContext({ lang: "en", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Remember the person's language choice between visits
  useEffect(() => {
    const saved = window.localStorage.getItem("ekta-nexcus-lang");
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ekta-nexcus-lang", lang);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
