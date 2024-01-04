### Switch

활성화 또는 비활성화 상태를 전환할 수 있는 컴포넌트 입니다.

### Basic Usage

```jsx
<Switch>
  <Switch.Box>
    <Switch.Thumb />
  </Switch.Box>
</Switch>
```

### API

**Switch**

| Prop          | Type                   | Default | Description                                                      |
| ------------- | ---------------------- | ------- | ---------------------------------------------------------------- |
| externalMode? | `boolean`              | -       | external switch state                                            |
| defalutMode?  | `T = any`              | -       | default switch state                                             |
| onModeChange? | `(option : T) => void` | -       | external swtich setState. should be accompanied by externalMode. |

**Thumb**

| Prop          | Type                      | Default | Description                                                                                           |
| ------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?      | `boolean` `undefined`     | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?    | `string`                  | -       | styling props for target component                                                                    |
| onThumbClick? | `(e: MouseEvent) => void` | -       | external function to control thumb component.                                                         |

**Box**

| Prop                            | Type                              | Default | Description                                                                                           |
| ------------------------------- | --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| asChild?                        | `boolean` `undefined`             | false   | Change the default rendered element for the one passed as a child, merging their props and functions. |
| className?                      | `string`                          | -       | styling props for target component                                                                    |
| clickable?                      | `boolean`                         | -       |
| Option to enable clickable box. |
| onBoxClick?                     | `(e: MouseEvent) => void` `never` | -       | external function to control box component.                                                           |
