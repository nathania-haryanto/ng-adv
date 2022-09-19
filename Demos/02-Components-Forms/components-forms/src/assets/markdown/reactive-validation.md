When combining form options as nonNullable or updateOn with Validators or asyncValidators:

```typescript
email: [
    this.person.email,
    {
    nonNullable: true,
    updateOn: 'blur',
    validators: [Validators.required, Validators.email],
    asyncValidators: [this.mailExistsValidator],
    },
],
```