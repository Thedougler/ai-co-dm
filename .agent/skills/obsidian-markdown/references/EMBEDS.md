# Embeds

Prefer files under `attachments/` for vault media.

```markdown
![[Note Name]]
![[Note Name#Heading]]
![[Note Name#^block-id]]
![[attachments/image.png]]
![[attachments/image.png|300]]
![[attachments/image.png|640x480]]
![[attachments/doc.pdf#page=3]]
![[attachments/audio.mp3]]
```

External images (rare): `![Alt|300](https://…)`

List embed: put `^list-id` on its own line after the list, then `![[Note#^list-id]]`.

Search embed (Obsidian UI):

````markdown
```query
tag:#project
```
````
