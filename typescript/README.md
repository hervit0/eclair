# Eclair Typescript

Following this [tutorial](https://www.typescriptlang.org/docs/handbook/classes.html).

Configs:
```
|> node -v
v11.7.0
|> npm -v
6.5.0
|> tsc -v
Version 3.6.3
```

## Initialize

```
npm install -g typescript
npm install -g standard
tsc --init
```

## Add deps

```shell script
npm i ts-node -D
npm i aws -S
```

## Run things

```
tsc --target ES6 shape.ts && node shape
npx ts-node tutorial/classes.ts
```
