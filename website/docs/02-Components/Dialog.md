### Dialog

사용자에게 특정 작업을 수행하거나 추가 정보를 제공하기 위해 화면 상에 일시적으로 띄워지는 컴포넌트 입니다.

### Basic Usage

```jsx
<Dialog>
  <Dialog.Trigger />
  <Dialog.BackDrop />
  <Dialog.Content>content</Dialog.Content>
</Dialog>
```

### API

**Dialog**

| Prop          | Type         | Default | Description                                                    |
| ------------- | ------------ | ------- | -------------------------------------------------------------- |
| externalOpen? | `boolean`    | -       | external open state                                            |
| defaultOpen?  | `boolean`    | -       | default open state                                             |
| onOpenChange? | `() => void` | -       | external open setState. should be accompanied by externalOpen. |

**Trigger**

| Prop           | Type                      | Default | Description                                                                                           |
| -------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?       | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?     | `string`                  | -       | styling props for target component                                                                    |
| onTriggerClick | `(e: MouseEvent) => void` | -       | external function to control trigger component.                                                       |

**BackDrop**

| Prop            | Type                      | Default | Description                                                                                           |
| --------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?        | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?      | `string`                  | -       | styling props for target component                                                                    |
| onBackDropClick | `(e: MouseEvent) => void` | -       | external function to control backdrop component.                                                      |

**Content**

| Prop        | Type                  | Default | Description                                                                                           |
| ----------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?    | `boolean` `undefined` | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?  | `string`              | -       | styling props for target component                                                                    |
| closeOnEsc? | `boolean`             | -       | The option to determine whether the modal should close when the 'ESC' key is pressed.                 |
