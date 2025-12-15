"use client";

import { useState } from "react";
import { leakEnv } from "./actions";

export default function Home() {
  const [secret, setSecret] = useState("");

  return (
    <main style={{ padding: 24 }}>
      <h1>Vulnerable Next.js Demo</h1>
      <p>Click the button to trigger a Server Action that returns an env variable.</p>
      <form
        action={async () => {
          const value = await leakEnv();
          setSecret(String(value));
        }}
      >
        <button type="submit">Run Server Action</button>
      </form>
      <div style={{ marginTop: 16 }}>
        <strong>Secret:</strong> {secret}
      </div>
    </main>
  );
}
