# Typescript
- Typeを入れる　デブディペンデンシー

      npm install -D typescript

- tsconfig.json

      ./node_modules/.bin/tsc --init

- Parcel

      npm install -D parcel@next
      　
  - package.json:

        "scripts": {
          "start": "parcel serve ./src/index.html",
          "build": "parcel build ./src/index.html"
        },
  
  - src/index.html:
  
        <script src="./index.tsx"></script>

- pretty

      npm install --save-dev pretty-quick husky　
      
      npm install -D prettier
      
  webstorm - file watcher - pretty
