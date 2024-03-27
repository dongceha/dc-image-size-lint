```
npm i dc-image-size-lint
```

```json
"lint-staged": {
  "*.{png,jpg,jpeg,gif,webp,svg}": ["dc-image-size-lint --size=200"]
}
```