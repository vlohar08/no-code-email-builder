import React from "react";
import InputWithSideLabel from "./InputWithSideLabel";
import OptionToggle from "./OptionToggle";
import { camelCase } from "lodash";

type SocialInfoEditorProps = {
  id: string;
  isEnabled: boolean;
  url: string;
  title: string;
  onChange: (titles: string[], value: string | boolean) => void;
};

function SocialInfoEditor({
  id,
  isEnabled,
  url,
  title,
  onChange,
}: SocialInfoEditorProps) {
  return (
    <div>
      <OptionToggle
        id={id}
        state={isEnabled}
        title={title}
        onChange={() => onChange([camelCase(title), "isEnabled"], !isEnabled)}
      >
        <InputWithSideLabel
          id={id}
          state={url}
          title="Url"
          onChange={(value) => onChange([camelCase(title), "url"], value)}
        />
      </OptionToggle>
    </div>
  );
}

export default SocialInfoEditor;
