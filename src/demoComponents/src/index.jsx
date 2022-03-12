import { defineComponent, ref } from 'vue';

const Demo = defineComponent({
  name: 'DemoComponents',
  setup(props) {
    const input = ref(null);

    const click = (e) => {
      console.log(e);
      console.log(input.value);
    };
    return {
      click,
      input,
    };
  },
  render() {
    return (
      <>
        <div>test</div>
        <button onClick={this.click}>点击</button>
        <input v-model={this.input} placeholder="啊这" />
      </>
    );
  },
});

export default Demo;
