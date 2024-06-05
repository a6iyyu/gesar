import { useEffect } from "react";

export const WebsiteMeta = ({ title, description, icon }) => {
  useEffect(() => {
    document.title = title;

    if (!document.querySelector("meta[name='description']")) {
      const metadesc = document.createElement("meta");
      metadesc.name = "content";
      metadesc.content = description;
      document.head.appendChild(metadesc);
    }
    document.querySelector("meta").setAttribute("content", description);

    if (!document.querySelector("link[rel='icon']")) {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.href = icon;
      document.head.appendChild(favicon);
    }
    document.querySelector("link").setAttribute("href", icon);
  }, [title, description, icon]);
};