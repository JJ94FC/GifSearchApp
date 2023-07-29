import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Testings GifItem file", () => {
  const title = "title test";
  const url = "https://test.com/test.jpg";

  test("should match with the snapshot proptype", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should test that the img have same url and title given", () => {
    render(<GifItem title={title} url={url} />);
    const {src, alt} = screen.getByRole("img");
		expect(src).toBe(url);
		expect(alt).toBe(title);
  });
});
