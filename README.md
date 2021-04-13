# Resume

## Overview

My resume is a [JSON document](resume.json) that is programatically rendered into SVG and PDF formats.

## Developing

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Pre-commit

```bash
pre-commit install
pre-commit run --all-files
```

Bump version without tagging/committing

```bash
npm version patch --git-tag-version=false
```

## Vercel CLI

Login / deploy

```bash
npx vercel
npx vercel --prod
```
