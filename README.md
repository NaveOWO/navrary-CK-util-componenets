### Discription

---

**✅ Trigger<br/>**
SelectBox의 Option들이 열리는지 / 열리지 않는지 를 결정하는 Button<br/>
**✅ Label<br/>**
SelectBox컴포넌트에 대한 라벨을 담은 컴포넌트<br/>
**✅ Description<br/>**
SelectBox컴포넌트에 대한 설명을 담은 컴포넌트<br/>
**✅ OptionGroup<br/>**
SelectBox의 Option들을 담는 Container<br/>
**✅ Option<br/>**
SelecBox의 선택지들을 나타내는 컴포넌트<br/>
**✅ Value<br/>**
**Option들의 값들을 나타내는 컴포넌트<br/>
✅ Indicator<br/>**
각 Option들이 선택되었는지 나타낼 수 있는 컴포넌트<br/>

### Option

---

**🐘 defaultOpen<br/>**
Trigger버튼을 누르지 않고도 Option들을 미리 보여주는 옵션<br/>
**🐘 asChild <br/>**
자식 컴포넌트가 해당 추상화 된 컴포넌트의 기능을 위임받고 커스텀 된 스타일을 적용할것인지 결정하는 옵션<br/>
**🐘 externalState <br/>**
context외부의 로직 혹은 상태를 context내부에 주입할 때 사용할 수 있는 옴션<br/>

### useage

---

```tsx
import { Select } from "ck-util-components";

function selecOotion(){
    //
}

const Category = () => {
  return (
    <SelectBox defaultOpen externalSelectState={selectOption}>
      <Select.Label asChild>
        <S.CategoryLabel>
          카테고리<p>*</p>
        </S.CategoryLabel>
      </Select.Label>
      <Select.Description asChild>
        <S.CategoryDescription>
          컨텐츠에 어울리는 카테고리를 선택해주세요.
        </S.CategoryDescription>
      </Select.Description>
      <Select.OptionGroup asChild>
        <S.Wrapper>
          {Object.keys(CategoriesInfo)).map(
            (categoryId) => {
              return (
                <Select.Option id={Number(categoryId)} asChild defaultOpen>
                  <S.CategoryBox>
                    {CategoriesInfo[categoryId].name}
                  </S.CategoryBox>
                </Select.Option>
              );
            }
          )}
        </S.Wrapper>
      </Select.OptionGroup>
    </SelectBox>
  );
};
```
