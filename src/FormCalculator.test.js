import { render, fireEvent} from "@testing-library/react"
import FormCalculator from './FormCalculator'

it("checkButtonRender", () => {
    const {queryByTitle} = render(<FormCalculator/>);
    const btn = queryByTitle("Button");
    expect(btn).tobeTruthy();
});


