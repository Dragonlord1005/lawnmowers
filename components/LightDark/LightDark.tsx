import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function LightDark() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      <Switch
        checked={isDark}
        size="xs"
        shadow
        color="primary"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        iconOn={<BsMoonFill />}
        iconOff={<BsSunFill />}
        css={{
          pr: "40px",
          pt: "6px",
        }}
      />
    </div>
  );
}
