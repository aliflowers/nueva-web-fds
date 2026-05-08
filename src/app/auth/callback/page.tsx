"use client";

import { useEffect } from "react";

const TARGET_URL = "https://fengxchange.com/paypal-callback";
const ALLOWED_PARAMS = ["code", "state", "error", "error_description", "error_uri"] as const;

export default function AuthCallbackPage() {
  useEffect(() => {
    const source = new URLSearchParams(window.location.search);
    const out = new URLSearchParams();

    for (const key of ALLOWED_PARAMS) {
      const value = source.get(key);
      if (value !== null) out.set(key, value);
    }

    if (!out.has("code") && !out.has("error")) {
      out.set("error", "missing_code_or_error");
    }

    if (!out.has("state")) {
      out.set("state", "");
    }

    window.location.replace(`${TARGET_URL}?${out.toString()}`);
  }, []);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      <p>Verificando acceso, por favor espera...</p>
    </main>
  );
}
