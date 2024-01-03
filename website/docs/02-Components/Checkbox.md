### Checkbox

사용자에게 선택 옵션을 제공하고, 사용자가 옵션을 선택하거나 선택을 해제할 수 있는 컴포넌트 입니다.

### Basic Usage

```jsx
<Checkbox>
  <Checkbox.Indicator />
  <Checkbox.Label>checkbox</Checkbox.Label>
</Checkbox>
```

### API

**Checkbox**

| Prop           | Type                   | Default | Description                                                        |
| -------------- | ---------------------- | ------- | ------------------------------------------------------------------ |
| externalCheck? | `boolean`              | -       | external checked state                                             |
| defalutCheck?  | `T = any`              | -       | default checked state                                              |
| onCheckChange? | `(option : T) => void` | -       | external checked setState. should be accompanied by externalCheck. |
| id             | `T = any`              | -       | The props used to identify an option.                              |

**Indicator**

| Prop              | Type                      | Default | Description                                                                                           |
| ----------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?          | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?        | `string`                  | -       | styling props for target component                                                                    |
| onIndicatorClick? | `(e: MouseEvent) => void` | -       | external function to control indicator component.                                                     |

**Label**

| Prop          | Type                      | Default | Description                                                                                           |
| ------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?      | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?    | `string`                  | -       | styling props for target component                                                                    |
| onLabelClick? | `(e: MouseEvent) => void` | -       | external function to control label component.                                                         |
