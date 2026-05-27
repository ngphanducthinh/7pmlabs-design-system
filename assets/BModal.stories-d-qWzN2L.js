import{n as e}from"./chunk-BneVvdWh.js";import{X as t,i as n}from"./iframe-By7LT0M0.js";import{Ct as r,H as i,St as a,U as o,V as s,t as c}from"./components-DGiLIoKr.js";var l,u,d;e((()=>{c(),n(),l={title:`Feedback/Modal`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`The <code>BModal</code> component is a versatile modal dialog component that can be used to display content in a layer above the main application.<br><br>It includes subcomponents like <code>BModalHeader</code>, <code>BModalBody</code>, and <code>BModalFooter</code> to structure the modal content effectively.<br>When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information.`}}}},u={args:{modelValue:!1},parameters:{docs:{source:{code:`
          <script setup lang="ts">
            const model = ref(false);
            const openModal = () => {
              model.value = true;
            };
            const closeModal = () => {
              model.value = false;
            };
          <\/script>

          <template>
            <BButton @click="openModal">Modal</BButton>

            <BModal v-model="model" class="b:w-[400px]">
              <BModalHeader title="My modal title"></BModalHeader>
              <BModalBody>
                {{ 'This is a modal body.' }}
              </BModalBody>
              <BModalFooter @cancel="closeModal">
              </BModalFooter>
            </BModal>
          </template>
        `}}},render:e=>({components:{BButton:r,BModal:a,BModalHeader:s,BModalBody:o,BModalFooter:i},setup(){let n=t(e.modelValue);return{args:e,model:n,openModal:()=>{n.value=!0},closeModal:()=>{n.value=!1}}},template:`
      <BButton @click="openModal">Modal</BButton>
      <BModal v-bind="args" v-model="model" class="b:w-[400px]">
        <BModalHeader title="My modal title"></BModalHeader>
        <BModalBody>
          {{ 'This is a modal body.' }}
        </BModalBody>
        <BModalFooter @cancel="closeModal">
        </BModalFooter>
      </BModal>
    `})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false
  },
  parameters: {
    docs: {
      source: {
        code: \`
          <script setup lang="ts">
            const model = ref(false);
            const openModal = () => {
              model.value = true;
            };
            const closeModal = () => {
              model.value = false;
            };
          <\/script>

          <template>
            <BButton @click="openModal">Modal</BButton>

            <BModal v-model="model" class="b:w-[400px]">
              <BModalHeader title="My modal title"></BModalHeader>
              <BModalBody>
                {{ 'This is a modal body.' }}
              </BModalBody>
              <BModalFooter @cancel="closeModal">
              </BModalFooter>
            </BModal>
          </template>
        \`
      }
    }
  },
  render: (args: any) => ({
    components: {
      BButton,
      BModal,
      BModalHeader,
      BModalBody,
      BModalFooter
    },
    setup() {
      const model = ref(args.modelValue);
      const openModal = () => {
        model.value = true;
      };
      const closeModal = () => {
        model.value = false;
      };
      return {
        args,
        model,
        openModal,
        closeModal
      };
    },
    template: \`
      <BButton @click="openModal">Modal</BButton>
      <BModal v-bind="args" v-model="model" class="b:w-[400px]">
        <BModalHeader title="My modal title"></BModalHeader>
        <BModalBody>
          {{ 'This is a modal body.' }}
        </BModalBody>
        <BModalFooter @cancel="closeModal">
        </BModalFooter>
      </BModal>
    \`
  })
}`,...u.parameters?.docs?.source},description:{story:`This story demonstrates the default usage of the BModal component.`,...u.parameters?.docs?.description}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,l as default};