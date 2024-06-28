```
npm i dc-image-size-lint
```

```json
"lint-staged": {
  "*.{png,jpg,jpeg,gif,webp,svg}": ["dc-size-lint --size=200"]
}
```