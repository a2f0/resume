# Resume

## Overview

My resume is a [JSON document](resume.json) that is programatically rendered into SVG and PDF formats.

## Developing

### Quick Start

```bash
npm install
pre-commit install
npm run server
npm run ci
```

### Testing builds

Deploy to Vercel without having to commit or push (the randomized URL for viewing build will be in the output of this command).

```bash
npx vercel
```
