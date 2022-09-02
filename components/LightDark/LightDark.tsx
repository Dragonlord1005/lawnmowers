import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";


export default function LightDark() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      <Switch
        checked={isDark}
        size="xs"
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        iconOn={<i className='bx bxs-moon'></i>}
        iconOff={<i className='bx bxs-sun'></i>}
      />
    </div>
  );
}
