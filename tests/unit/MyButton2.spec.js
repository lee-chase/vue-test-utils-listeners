import { shallowMount } from "@vue/test-utils";
import MyButton2 from "@/components/MyButton2";

describe("MyButton2", () => {
  it("should show the correct contents", () => {
    const wrapper = shallowMount(MyButton2, {
      propsData: {
        "button-text": "Wibble"
      }
    });
    expect(wrapper.text()).toEqual("Wibble");
  });

  it("Raises click event when clicked", () => {
    const wrapper = shallowMount(MyButton2);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
