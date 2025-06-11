"use client";

import { useEffect } from "react";

export default function Section() {
  useEffect(() => {
    fetch("/api/chat")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Section</div>;
}
