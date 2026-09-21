"use client";

import { useState } from "react";
import { profile, socialLinks } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import MagneticButton from "./ui/MagneticButton";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "missing_key"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (formState.botcheck) {
      return;
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "012a37cd-4e08-4c7a-b015-a214c820104f";

    if (!accessKey) {
      setStatus("missing_key");
      setStatusMessage(
        "E-posta servisi henüz aktif edilmedi. Lütfen anahtarınızı ekleyin."
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
          subject: `Portfolyo İletişim: ${formState.name.trim()}`,
          from_name: `${formState.name.trim()} (Portfolyo)`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            "Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım."
        );
        setFormState({ name: "", email: "", message: "", botcheck: "" });
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 6000);
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Mesaj gönderilemedi. Lütfen tekrar deneyiniz."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Bağlantı hatası oluştu. Lütfen doğrudan e-posta ile iletişime geçiniz."
      );
    }
  };

  return (
    <section id="iletisim" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left — heading + info */}
          <div className={styles.left}>
            <ScrollReveal>
              <span className={styles.eyebrow}>İletişim</span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className={styles.heading}>
                Bir Fikrin mi Var?
                <br />
                <span className={styles.headingAccent}>
                  Konuşalım.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className={styles.description}>
                Yeni projeler, iş birliği fırsatları veya sadece merhaba demek
                için bana ulaşabilirsin.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={styles.contactInfo}>
                <a
                  href={`mailto:${profile.email}`}
                  className={styles.emailLink}
                >
                  {profile.email}
                </a>

                <div className={styles.socialRow}>
                  {socialLinks.map((link) => (
                    <MagneticButton
                      key={link.name}
                      as="a"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      ariaLabel={link.name}
                    >
                      {link.name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 10L10 2M10 2H4M10 2v6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </MagneticButton>
                  ))}
                </div>

                <MagneticButton
                  as="a"
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  ariaLabel="CV'yi indir"
                >
                  CV&apos;yi İndir
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.2} className={styles.right}>
            <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
              {/* Spam Honeypot */}
              <input
                type="text"
                name="botcheck"
                className={styles.botField}
                tabIndex={-1}
                autoComplete="off"
                value={formState.botcheck}
                onChange={(e) =>
                  setFormState({ ...formState, botcheck: e.target.value })
                }
              />

              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Ad Soyad
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.input}
                  placeholder="Adınız ve soyadınız"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  E-posta
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.input}
                  placeholder="E-posta adresiniz"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Mesaj
                </label>
                <textarea
                  id="contact-message"
                  className={styles.textarea}
                  placeholder="Mesajınızı yazın..."
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  disabled={status === "submitting"}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div id="contact-status-message" className={`${styles.statusMessage} ${styles.statusSuccess}`}>
                  <svg
                    className={styles.statusIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className={styles.statusText}>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div id="contact-status-message" className={`${styles.statusMessage} ${styles.statusError}`}>
                  <svg
                    className={styles.statusIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className={styles.statusText}>
                    {statusMessage}{" "}
                    <a
                      href={`mailto:${profile.email}?subject=İletişim&body=${encodeURIComponent(formState.message)}`}
                      style={{ color: "inherit", textDecoration: "underline" }}
                    >
                      Doğrudan mail göndermek için tıklayın.
                    </a>
                  </span>
                </div>
              )}

              {status === "missing_key" && (
                <div id="contact-status-message" className={`${styles.statusMessage} ${styles.statusWarning}`}>
                  <svg
                    className={styles.statusIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className={styles.statusText}>
                    E-posta servisi henüz aktif edilmedi. Lütfen <code>.env.local</code> dosyasına Web3Forms anahtarınızı ekleyin.{" "}
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent("İletişim Formu Mesajı - " + formState.name)}&body=${encodeURIComponent(formState.message)}`}
                      style={{ color: "inherit", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Veya şimdi doğrudan mail uygulamasıyla gönderin.
                    </a>
                  </span>
                </div>
              )}

              <MagneticButton
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary"
              >
                <span id="contact-submit-btn" className={styles.buttonContent}>
                  {status === "submitting" ? (
                    <>
                      <span className={styles.spinner} />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : status === "success" ? (
                    "Gönderildi ✓"
                  ) : (
                    "Gönder"
                  )}
                </span>
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
