import{n as e}from"./chunk-BneVvdWh.js";import{A as t,l as n,o as r,u as i}from"./types-CV_3xB-y.js";import{mt as a,t as o}from"./components-CBHFLACH.js";var s,c,l,u,d,f;e((()=>{o(),t(),s={title:`General/Button`,component:a,tags:[`autodocs`],argTypes:{color:{control:`select`,options:Object.values(n)},size:{control:`select`,options:Object.values(i)},variant:{control:`select`,options:Object.values(r)}},parameters:{docs:{description:{component:`The <code>BButton</code> component is a versatile button component that supports various colors, sizes, and variants.<br><br>🔵 Primary button: used for the main action, there can be at most one primary button in a section.<br>⚪️ Secondary button: used for a series of actions without priority.<br>😶 Dashed button: commonly used for adding more actions.<br>🔤 Text button: used for the most secondary action.<br>🔗 Link button: used for external links.`}}}},c={args:{color:n.Primary,size:i.Medium,disabled:!1,variant:r.Solid},render:e=>({components:{BButton:a},setup(){return{args:e}},template:`
      <BButton v-bind="args">Primary</BButton>
    `})},l={parameters:{docs:{source:{code:`
          <BButton>Primary</BButton>
          <BButton color="secondary">Secondary</BButton>
          <BButton color="success">Success</BButton>
          <BButton color="failure">Failure</BButton>
          <BButton color="warning">Warning</BButton>
          <BButton color="info">Info</BButton>
        `}}},render:()=>({components:{BButton:a},template:`
      <div class="b:flex b:flex-wrap b:items-center b:gap-2">
        <BButton>Primary</BButton>
        <BButton color="secondary">Secondary</BButton>
        <BButton color="success">Success</BButton>
        <BButton color="failure">Failure</BButton>
        <BButton color="warning">Warning</BButton>
        <BButton color="info">Info</BButton>
      </div>
    `})},u={parameters:{docs:{source:{code:`
          <BButton size="sm">Primary</BButton>
          <BButton>Secondary</BButton>
          <BButton size="lg">Success</BButton>
        `}}},render:()=>({components:{BButton:a},template:`
      <div class="b:flex b:flex-wrap b:items-center b:gap-2">
        <BButton size="sm">Small</BButton>
        <BButton>Medium</BButton>
        <BButton size="lg">Large</BButton>
      </div>
    `})},d={parameters:{docs:{source:{code:`
          <BButton variant="solid">Solid</BButton>
          <BButton variant="outlined">Outlined</BButton>
          <BButton variant="dashed">Dashed</BButton>
          <BButton variant="text">Text</BButton>
          <BButton variant="link">Link</BButton>

          <BButton variant="solid" color="secondary">Solid</BButton>
          <BButton variant="outlined" color="secondary">Outlined</BButton>
          <BButton variant="dashed" color="secondary">Dashed</BButton>
          <BButton variant="text" color="secondary">Text</BButton>
          <BButton variant="link" color="secondary">Link</BButton>
        `}}},render:()=>({components:{BButton:a},template:`
      <table>
        <tbody>
          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Primary:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid">Solid</BButton>
                <BButton variant="outlined">Outlined</BButton>
                <BButton variant="dashed">Dashed</BButton>
                <BButton variant="text">Text</BButton>
                <BButton variant="link">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Secondary:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="secondary">Solid</BButton>
                <BButton variant="outlined" color="secondary">Outlined</BButton>
                <BButton variant="dashed" color="secondary">Dashed</BButton>
                <BButton variant="text" color="secondary">Text</BButton>
                <BButton variant="link" color="secondary">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Success:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="success">Solid</BButton>
                <BButton variant="outlined" color="success">Outlined</BButton>
                <BButton variant="dashed" color="success">Dashed</BButton>
                <BButton variant="text" color="success">Text</BButton>
                <BButton variant="link" color="success">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Failure:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="failure">Solid</BButton>
                <BButton variant="outlined" color="failure">Outlined</BButton>
                <BButton variant="dashed" color="failure">Dashed</BButton>
                <BButton variant="text" color="failure">Text</BButton>
                <BButton variant="link" color="failure">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Warning:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="warning">Solid</BButton>
                <BButton variant="outlined" color="warning">Outlined</BButton>
                <BButton variant="dashed" color="warning">Dashed</BButton>
                <BButton variant="text" color="warning">Text</BButton>
                <BButton variant="link" color="warning">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Info:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="info">Solid</BButton>
                <BButton variant="outlined" color="info">Outlined</BButton>
                <BButton variant="dashed" color="info">Dashed</BButton>
                <BButton variant="text" color="info">Text</BButton>
                <BButton variant="link" color="info">Link</BButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: BCommonColor.Primary,
    size: BCommonSize.Medium,
    disabled: false,
    variant: BButtonVariant.Solid
  },
  render: (args: any) => ({
    components: {
      BButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BButton v-bind="args">Primary</BButton>
    \`
  })
}`,...c.parameters?.docs?.source},description:{story:`This story demonstrates the default usage of the BButton component.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
          <BButton>Primary</BButton>
          <BButton color="secondary">Secondary</BButton>
          <BButton color="success">Success</BButton>
          <BButton color="failure">Failure</BButton>
          <BButton color="warning">Warning</BButton>
          <BButton color="info">Info</BButton>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton
    },
    template: \`
      <div class="b:flex b:flex-wrap b:items-center b:gap-2">
        <BButton>Primary</BButton>
        <BButton color="secondary">Secondary</BButton>
        <BButton color="success">Success</BButton>
        <BButton color="failure">Failure</BButton>
        <BButton color="warning">Warning</BButton>
        <BButton color="info">Info</BButton>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source},description:{story:`This story demonstrates the default usage of the BButton component.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
          <BButton size="sm">Primary</BButton>
          <BButton>Secondary</BButton>
          <BButton size="lg">Success</BButton>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton
    },
    template: \`
      <div class="b:flex b:flex-wrap b:items-center b:gap-2">
        <BButton size="sm">Small</BButton>
        <BButton>Medium</BButton>
        <BButton size="lg">Large</BButton>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source},description:{story:`This story demonstrates the different button sizes available in the BButton component.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
          <BButton variant="solid">Solid</BButton>
          <BButton variant="outlined">Outlined</BButton>
          <BButton variant="dashed">Dashed</BButton>
          <BButton variant="text">Text</BButton>
          <BButton variant="link">Link</BButton>

          <BButton variant="solid" color="secondary">Solid</BButton>
          <BButton variant="outlined" color="secondary">Outlined</BButton>
          <BButton variant="dashed" color="secondary">Dashed</BButton>
          <BButton variant="text" color="secondary">Text</BButton>
          <BButton variant="link" color="secondary">Link</BButton>
        \`
      }
    }
  },
  render: () => ({
    components: {
      BButton
    },
    template: \`
      <table>
        <tbody>
          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Primary:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid">Solid</BButton>
                <BButton variant="outlined">Outlined</BButton>
                <BButton variant="dashed">Dashed</BButton>
                <BButton variant="text">Text</BButton>
                <BButton variant="link">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Secondary:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="secondary">Solid</BButton>
                <BButton variant="outlined" color="secondary">Outlined</BButton>
                <BButton variant="dashed" color="secondary">Dashed</BButton>
                <BButton variant="text" color="secondary">Text</BButton>
                <BButton variant="link" color="secondary">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Success:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="success">Solid</BButton>
                <BButton variant="outlined" color="success">Outlined</BButton>
                <BButton variant="dashed" color="success">Dashed</BButton>
                <BButton variant="text" color="success">Text</BButton>
                <BButton variant="link" color="success">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Failure:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="failure">Solid</BButton>
                <BButton variant="outlined" color="failure">Outlined</BButton>
                <BButton variant="dashed" color="failure">Dashed</BButton>
                <BButton variant="text" color="failure">Text</BButton>
                <BButton variant="link" color="failure">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Warning:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="warning">Solid</BButton>
                <BButton variant="outlined" color="warning">Outlined</BButton>
                <BButton variant="dashed" color="warning">Dashed</BButton>
                <BButton variant="text" color="warning">Text</BButton>
                <BButton variant="link" color="warning">Link</BButton>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="b:py-4 b:pr-4">
                Info:
              </div>
            </td>
            <td>
              <div class="b:flex b:flex-wrap b:items-center b:gap-2">
                <BButton variant="solid" color="info">Solid</BButton>
                <BButton variant="outlined" color="info">Outlined</BButton>
                <BButton variant="dashed" color="info">Dashed</BButton>
                <BButton variant="text" color="info">Text</BButton>
                <BButton variant="link" color="info">Link</BButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    \`
  })
}`,...d.parameters?.docs?.source},description:{story:`This story demonstrates the different button variants available in the BButton component.`,...d.parameters?.docs?.description}}},f=[`Default`,`Color`,`Size`,`Variant`]}))();export{l as Color,c as Default,u as Size,d as Variant,f as __namedExportsOrder,s as default};