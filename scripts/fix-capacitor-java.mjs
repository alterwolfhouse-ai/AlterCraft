import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const target = join(process.cwd(), 'android', 'app', 'capacitor.build.gradle');

if (!existsSync(target)) {
  console.log('No Android Capacitor Gradle file found; skipping Java compatibility patch.');
  process.exit(0);
}

const current = readFileSync(target, 'utf8');
const next = current
  .replaceAll('JavaVersion.VERSION_21', 'JavaVersion.VERSION_17')
  .replaceAll("jvmTarget = '21'", "jvmTarget = '17'")
  .replaceAll('jvmTarget = "21"', 'jvmTarget = "17"');

if (next !== current) {
  writeFileSync(target, next);
  console.log('Patched android/app/capacitor.build.gradle to Java 17 for local JDK compatibility.');
} else {
  console.log('Android Capacitor Gradle file already uses Java 17-compatible settings.');
}
