"use client"

import { Sun, Moon, Monitor, Type, Eye } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import { useLang } from "@/context/LangContext"
import { type Lang } from "@/lib/translations"

const themes = [
  { value: "light" as const, icon: Sun, labelKey: "accessibility.light" },
  { value: "dark" as const, icon: Moon, labelKey: "accessibility.dark" },
  { value: "system" as const, icon: Monitor, labelKey: "accessibility.system" },
]

const colorblindOptions = [
  { value: "none" as const, labelKey: "accessibility.off" },
  { value: "protanopia" as const, labelKey: "accessibility.protanopia" },
  { value: "deuteranopia" as const, labelKey: "accessibility.deuteranopia" },
  { value: "tritanopia" as const, labelKey: "accessibility.tritanopia" },
  { value: "high-contrast" as const, labelKey: "accessibility.high_contrast" },
]

const fontSizes = [
  { value: "normal" as const, labelKey: "accessibility.normal" },
  { value: "large" as const, labelKey: "accessibility.large" },
  { value: "xlarge" as const, labelKey: "accessibility.xlarge" },
]

const languages = [
  { value: "es" as const, labelKey: "Español" },
  { value: "en" as const, labelKey: "English" },
]

export function AccessibilityPanel({ onClose }: { onClose: () => void }) {
  const { theme, colorblind, fontSize, setTheme, setColorblind, setFontSize } =
    useTheme()
  const { lang, setLang, t } = useLang()

  return (
    <div className="p-4 space-y-5" role="dialog" aria-label={t("accessibility.title")}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-theme-text flex items-center gap-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          {t("accessibility.title")}
        </h3>
        <button
          onClick={onClose}
          className="text-theme-secondary hover:text-theme-text text-sm"
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>

      <div>
        <label className="text-xs font-medium text-theme-secondary uppercase tracking-wider">
          {t("accessibility.language")}
        </label>
        <div className="mt-2 flex gap-1.5">
          {languages.map((l) => (
            <button
              key={l.value}
              onClick={() => setLang(l.value)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all
                ${
                  lang === l.value
                    ? "bg-theme-accent text-white shadow-sm"
                    : "bg-theme-surface-2 text-theme-secondary hover:text-theme-text"
                }`}
              aria-pressed={lang === l.value}
            >
              {l.labelKey}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-theme-secondary uppercase tracking-wider">
          {t("accessibility.theme")}
        </label>
        <div className="mt-2 flex gap-1.5">
          {themes.map((th) => {
            const Icon = th.icon
            return (
              <button
                key={th.value}
                onClick={() => setTheme(th.value)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all
                  ${
                    theme === th.value
                      ? "bg-theme-accent text-white shadow-sm"
                      : "bg-theme-surface-2 text-theme-secondary hover:text-theme-text"
                  }`}
                aria-pressed={theme === th.value}
                title={t(th.labelKey)}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs">{t(th.labelKey)}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-theme-secondary uppercase tracking-wider">
          {t("accessibility.colorblind")}
        </label>
        <div className="mt-2 space-y-1">
          {colorblindOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setColorblind(opt.value)}
              className={`w-full rounded-lg px-3 py-2 text-sm font-medium text-left transition-all
                ${
                  colorblind === opt.value
                    ? "bg-theme-accent/10 text-theme-accent ring-1 ring-theme-accent"
                    : "text-theme-secondary hover:text-theme-text hover:bg-theme-surface-2"
                }`}
              aria-pressed={colorblind === opt.value}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-theme-secondary uppercase tracking-wider">
          {t("accessibility.font_size")}
        </label>
        <div className="mt-2 flex gap-1.5">
          {fontSizes.map((fs) => (
            <button
              key={fs.value}
              onClick={() => setFontSize(fs.value)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all
                ${
                  fontSize === fs.value
                    ? "bg-theme-accent text-white shadow-sm"
                    : "bg-theme-surface-2 text-theme-secondary hover:text-theme-text"
                }`}
              aria-pressed={fontSize === fs.value}
            >
              <Type className="h-4 w-4" aria-hidden="true" />
              <span>{t(fs.labelKey)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
