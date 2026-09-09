import { cpSync, existsSync } from 'node:fs'

if (!existsSync('out/en')) {
  console.error('out/en does not exist — did the export produce locale dirs?')
  process.exit(1)
}

cpSync('out/en', 'out', { recursive: true })
console.log('mirrored out/en → out/')