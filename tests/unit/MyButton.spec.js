import { shallowMount } from "@vue/test-utils";
import MyButton from "@/components/MyButton";

describe("MyButton", () => {
  it("should show the correct contents", () => {
    const wrapper = shallowMount(MyButton, {
      propsData: {
        "button-text": "Wibble"
      }
    });
    expect(wrapper.text()).toEqual("Wibble");
  });

  it("Raises click event when clicked", () => {
    const wrapper = shallowMount(MyButton);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
