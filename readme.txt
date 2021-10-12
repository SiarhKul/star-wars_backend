husky связывает lint-stage c git hook - pre-commit

Установка husky и lint-stage 
1. npm i -D husky
2. npx husky-init
3. в папку .husky/pre-commit записать npm run pre-commit
4. в package.json создать скрипт "prepare": "husky install","pre-commit": "lint-staged"
5. npm i -D ling-staged
6. в package.json написать 	"lint-staged": {"*.{js,jsx,ts,tsx}": [ "eslint" ] }