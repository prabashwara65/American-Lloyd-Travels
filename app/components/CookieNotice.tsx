"use client";

import { useState } from "react";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return <div className="cookie-notice">In order to provide you with the best online experience this website uses cookies. By using our website, you agree to our use of cookies. <a href="#contact">More Info.</a><button aria-label="Dismiss cookie notice" onClick={() => setIsVisible(false)}>×</button></div>;
}
