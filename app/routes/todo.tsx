import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Todo from "../islands/todo";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  return c.render(
    <div class={className}>
      <h1>Todo</h1>
      <Todo />
    </div>
  );
});
