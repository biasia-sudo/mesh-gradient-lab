export type Preset = {
  family: string;
  name: string;
  zhName: string;
  description: string;
  colors: string[];
};

export const presets: Preset[] = [
  { family: "RedYellow", name: "Burning Sky", zhName: "烈空", description: "warm sunrise, ember, volcanic dusk", colors: ["#C4C4C4", "#E48D3E", "#DF250C", "#1F100D", "#000000"] },
  { family: "RedYellow", name: "Dyed Horizon", zhName: "霞染", description: "peach to coral, soft editorial sunset", colors: ["#DDDFEE", "#DFCAAD", "#F8A4A4", "#F16041", "#EF2F6A"] },
  { family: "RedYellow", name: "Sunset Glow", zhName: "夕霞", description: "blue air meeting warm horizon", colors: ["#B6D3EF", "#E8CCAF", "#F09050", "#F888A0"] },
  { family: "BluePurple", name: "Glacial Glow", zhName: "冰川", description: "deep blue cinematic glow", colors: ["#020C19", "#253999", "#007BDC", "#B399F3", "#EBCDCD"] },
  { family: "BluePurple", name: "Frost Dawn", zhName: "霜降", description: "dreamy violet dusk", colors: ["#DDDFEE", "#DAA1AF", "#5572B6", "#7C62A5"] },
  { family: "BluePurple", name: "Stellar", zhName: "星幕", description: "cosmic blue with a pink ignition", colors: ["#F6D0DB", "#0646CE", "#182D7C", "#28173B"] },
  { family: "GreenYellow", name: "Tranquil Bay", zhName: "海湾", description: "teal water descending into indigo", colors: ["#DBE3D0", "#8DB8A7", "#2D8E9A", "#076492", "#154288", "#262C81"] },
  { family: "GreenYellow", name: "Lakeside Glow", zhName: "湖光", description: "spring field to clear water", colors: ["#EFEDAD", "#A7E1A7", "#3898EF", "#119AB8"] },
  { family: "GreenYellow", name: "Spring Days", zhName: "春日", description: "fresh palette with gentle pink lift", colors: ["#EDCED3", "#90D5BF", "#34C99E", "#A9BF5A"] },
  { family: "Contrast", name: "Waltz", zhName: "华尔兹", description: "editorial magenta to indigo", colors: ["#F4B1A8", "#E36787", "#7914DF", "#2209A7"] },
  { family: "Contrast", name: "Midnight Bourbon", zhName: "午夜波本", description: "hot orange and saturated electric blue", colors: ["#F2846D", "#D66AA4", "#1F3FCE", "#101A7C"] },
  { family: "Contrast", name: "Amber Mist", zhName: "雾色暖阳", description: "amber editorial wash with cool exit", colors: ["#E0A800", "#FF7C5B", "#E08E81", "#91ABCC"] },
  { family: "Dark", name: "Phantom", zhName: "魅影", description: "moody luxury night palette", colors: ["#C4541A", "#A8425E", "#73218F", "#400A75", "#240845", "#030300"] },
  { family: "Dark", name: "Jungle", zhName: "丛林", description: "earthy green darkness", colors: ["#B0991C", "#739642", "#4A874A", "#0F574C", "#080300"] },
  { family: "Dark", name: "Fading Night", zhName: "渐明", description: "dusty rose falling into deep blue", colors: ["#DEC4D1", "#878CB8", "#215C80", "#3D365C", "#210F17"] },
  { family: "Light", name: "Soft Bubble", zhName: "泡沫", description: "airy soft pastel cloud", colors: ["#F5EBD9", "#F2D4DB", "#EBBDDE", "#CCBAE3", "#8CBFF0", "#78B0FF"] },
  { family: "Light", name: "Peach", zhName: "水蜜桃", description: "gentle candy bloom", colors: ["#D9F5FA", "#FCD9D6", "#FCBAC9", "#F0B2F5"] },
  { family: "Light", name: "Sun Flower", zhName: "向阳", description: "bright floral pastel ribbon", colors: ["#FFD9C2", "#F5C7C4", "#D1BAE3", "#C2B8F0", "#D6A6F0"] }
];

export const families = [...new Set(presets.map((preset) => preset.family))];
