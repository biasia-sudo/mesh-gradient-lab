import { MeshGradientCard } from "@/components/MeshGradientCard";
import { presets, families } from "@/data/presets";

const featured = presets.slice(0, 6);

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Mesh Gradient Lab</p>
          <h1>Preset-backed mesh gradients, borrowed from shader thinking and tuned for preview.</h1>
          <p className="lede">
            I pulled the visual idea from `shader-lab` mesh gradients, then rebuilt it as a lightweight preview site using Mona&apos;s real gradient presets.
            Each card uses the preset palette as a moving mesh field instead of a flat linear strip.
          </p>
          <div className="hero-meta">
            <span>18 presets</span>
            <span>6 families</span>
            <span>animated mesh previews</span>
          </div>
        </div>
        <div className="hero-stack">
          {featured.map((preset) => (
            <MeshGradientCard key={preset.name} preset={preset} />
          ))}
        </div>
      </section>

      <section className="family-rail">
        {families.map((family) => (
          <a key={family} href={`#${family}`}>
            {family}
          </a>
        ))}
      </section>

      {families.map((family) => {
        const group = presets.filter((preset) => preset.family === family);
        return (
          <section key={family} id={family} className="family-section">
            <div className="family-heading">
              <p>{family}</p>
              <h2>{group.length} mesh variants from the original preset family.</h2>
            </div>
            <div className="grid">
              {group.map((preset) => (
                <MeshGradientCard key={`${family}-${preset.name}`} preset={preset} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
