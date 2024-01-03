### Select

사용자가 여러 옵션 중 하나를 선택할 수 있도록 하는 컴포넌트 입니다.

### Basic Usage

```jsx
<Select>
  <Select.Trigger />
  <Select.Value>apple</Select.Value>
  <Select.OptionGroup>
    <Select.Option id="orange">Orange</Select.Option>
    <Select.Option id="apple">Apple</Select.Option>
    <Select.Option id="grape">Grape</Select.Option>
  </Select.OptionGroup>
</Select>
```

### API

**Select**

| Prop                    | Type                   | Default | Description                                                                |
| ----------------------- | ---------------------- | ------- | -------------------------------------------------------------------------- |
| externalSelectedOption? | `T = any`              | -       | external select state                                                      |
| defalutSelected?        | `T = any`              | -       | default select state                                                       |
| onSelectChange?         | `(option : T) => void` | -       | external select setState. should be accompanied by externalSelectedOption. |
| externalOpen?           | `boolean`              | -       | external open state                                                        |
| defaultOpen?            | `boolean`              | -       | default open state                                                         |
| onOpenChange?           | `() => void`           | -       | external open setState. should be accompanied by externalOpen.             |

**Trigger**

| Prop           | Type                      | Default | Description                                                                                           |
| -------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?       | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?     | `string`                  | -       | styling props for target component                                                                    |
| onTriggerClick | `(e: MouseEvent) => void` | -       | external function to control trigger component.                                                       |

**OptionGroup**

| Prop       | Type                  | Default | Description                                                                                           |
| ---------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?   | `boolean` `undefined` | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className? | `string`              | -       | styling props for target component                                                                    |

**Option**

| Prop          | Type                      | Default | Description                                                                                           |
| ------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?      | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?    | `string`                  | -       | styling props for target component                                                                    |
| onOptionClick | `(e: MouseEvent) => void` | -       | external function to control option component.                                                        |
| id            | `T = any`                 | -       | props used to identify an option.                                                                     |

**Value**

| Prop         | Type                      | Default | Description                                                                                           |
| ------------ | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?     | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?   | `string`                  | -       | styling props for target component                                                                    |
| options      | `Record<number, T = any>` | -       | external object to match option with specific value.                                                  |
| defaultValue | `T = any`                 | -       | default value.                                                                                        |
