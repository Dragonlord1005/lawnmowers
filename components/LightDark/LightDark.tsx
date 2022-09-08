import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import Script from 'next/script'

export default function LightDark() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
      {/* <link
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        rel="stylesheet"
      ></link> */}
      <Script src="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" />
      <Switch
        checked={isDark}
        size="xs"
        shadow color="primary"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        iconOn={<i className="bx bxs-moon"></i>}
        iconOff={<i className="bx bxs-sun"></i>}
        css={{
          pr: "40px",
          pt: "6px",
        }}
      />
    </div>
  );
}
