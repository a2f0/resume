# Resume

## Quick Start

```bash
npm install
pre-commit install
npm run server
npm run ci
```

## Testing

Test Locally

```sh
# start the dev server
npx next dev -p 4001
npx wdio run wdio.headless.conf.ts --spec test/specs/constants.unit.ts
```

Deploy to Vercel without having to commit or push (the randomized URL for viewing build will be in the output of this command).

```sh
npx vercel
```

Spell check against a [aspell definition in dotfiles](https://github.com/a2f0/dotfiles/blob/main/files/aspell.en.pws)

```sh
aspell --master=en_US --lang=en_US -c resume.json
```
