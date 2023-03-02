import EventBus from "../src/index";

test("test EventBus", async () => {
  type Data = Record<string, string>;
  let data: Data = { type: "success" };
  let bus = new EventBus<Data>();

  let callback = (res: Data) => {
    expect(res?.type).toBe("success");
  };
  let callback2 = (res: Data) => {
    expect(res?.type).toBe("success");
  };
  bus.on("start", callback);
  bus.on("start", callback2);
  bus.emit("start", data);
  bus.off("start")
  
});
