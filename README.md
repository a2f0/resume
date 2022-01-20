# Resume

## Quick Start

```bash
npm install
pre-commit install
npm run server
npm run ci
npx wdio run wdio.shared.conf.ts --spec test/specs/constants.unit.ts
```

## Testing builds

Deploy to Vercel without having to commit or push (the randomized URL for viewing build will be in the output of this command).

```bash
npx vercel
```

Spell check against a [aspell definition in dotfiles](https://github.com/a2f0/dotfiles/blob/main/files/aspell.en.pws)

```bash
aspell --master=en_US --lang=en_US -c resume.json
```
