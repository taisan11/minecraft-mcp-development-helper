import { $ } from "bun";

["linux-x64","linux-arm64","windows-x64","darwin-x64","darwin-arm64"]

// ループ
for (const platform of ["linux-x64","linux-arm64","windows-x64","darwin-x64","darwin-arm64"]) {
  await $`bun build --compile --target=bun-${platform} --minify --sourcemap ./index.ts --outfile ./dist/mmdh-${platform}`
}