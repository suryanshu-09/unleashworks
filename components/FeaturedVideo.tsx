"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";

export default function FeaturedVideo() {
  const [playInline, setPlayInline] = useState(false);
  const video = siteConfig.featuredVideo;

  return (
    <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-navy-deep shadow-2xl">
      {playInline ? (
        <iframe
          src={video.embedUrl}
          title={video.title}
          height={740}
          width="100%"
          style={{ border: 0, height: 740, width: "100%", background: "#fff" }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full"
          aria-label={`${video.title} (opens on LinkedIn)`}
        >
          <Image
            src="/pfp.jpeg"
            alt="Nuzhath Ayaz — watch the video on LinkedIn"
            width={800}
            height={450}
            sizes="(max-width: 640px) 100vw, 576px"
            className="aspect-video w-full object-cover object-top"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-7 w-7 translate-x-[1px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10 text-left">
            <span className="block text-sm font-semibold text-white">
              Unconscious Bias in Leadership
            </span>
            <span className="mt-0.5 block text-xs text-white/70">
              Video lives on LinkedIn — tap to watch
            </span>
          </span>
        </a>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 bg-navy-deep px-5 py-4">
        <p className="text-sm text-white/60">
          Unconscious Bias in Leadership — watch with comments on LinkedIn.
        </p>
        <div className="flex items-center gap-4">
          {!playInline && (
            <button
              type="button"
              onClick={() => setPlayInline(true)}
              className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Play inline
            </button>
          )}
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
          >
            Watch on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
