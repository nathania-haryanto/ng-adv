- Effects are basically async actions that typically interact with the data store

- Examine the `saveComment` method of the `comment.service.ts`

```javascript
saveComment(item: CommentItem) {
    if (item.id === undefined) {
        return this.http.post<CommentItem>(this.url, item);
    } else {
        return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);
    }
}
```

- Examine how it is consumed be the effect


- Use the Mock Markdown Editor to update a Comment of your choice. Check the `db.json` file in the root of the project if it has been updated.

![md-editor](assets/images/md-editor.jpg)

- Also notice on how to respond on completed effects in a facade:

```javascript
this.subs = this.actions
.pipe(
    ofType(
        '[Comments] saveComment Success',
        '[Comments] deleteComment Success',
    )
)
```