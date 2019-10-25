```html
...
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <ion-card>
    <ion-toolbar>
      <fiv-editable-label
        value="Title"
        type="title"
        formControlName="title"
        [editing]="editing"
      >
      </fiv-editable-label>
    </ion-toolbar>
    <ion-card-content>
      <ion-item>
        <fiv-editable-label
          value="Your Name"
          formControlName="name"
          [editing]="editing"
        ></fiv-editable-label>
      </ion-item>
    </ion-card-content>
  </ion-card>
  <ion-button block color="primary" type="submit">
    Login
  </ion-button>
</form>
...
```
