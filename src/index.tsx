import { Action, ActionPanel, Form, popToRoot } from "@raycast/api";
import { useCachedState } from "@raycast/utils";

export default function Command() {
  const [value, setValue] = useCachedState("input", "");
  const output = value.replaceAll(/\r?\n|\r/g, " ");
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.CopyToClipboard content={output} title="Copy to Clipboard" />
        </ActionPanel>
      }
    >
      <Form.TextArea
        id="input"
        title="Input"
        placeholder="Enter text you want to convert to one line..."
        onChange={setValue}
      />
      <Form.TextArea id="output" value={output} />
    </Form>
  );
}
